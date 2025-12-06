let compareList = [];
let currentUniversity = null;

// Переключение секций
function showSection(id) {
    ["list", "university", "compare"].forEach(s =>
        document.getElementById(s).classList.add("hidden")
    );
    document.getElementById(id).classList.remove("hidden");

    if (id === "compare") updateComparison();
}

// Генерация списка карточек
const list = document.getElementById("university-list");

universities.forEach(u => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${u.name}</h3>`;
    card.onclick = () => openUniversity(u.id);
    list.appendChild(card);
});

// Открытие университета
function openUniversity(id) {
    const uni = universities.find(u => u.id === id);
    currentUniversity = uni;

    document.getElementById("uni-name").innerText = uni.name;
    document.getElementById("uni-overview").innerText = uni.overview;

    const pr = document.getElementById("uni-programs");
    pr.innerHTML = "";
    uni.programs.forEach(block => {
        pr.innerHTML += `<li><strong>${block.level}:</strong> ${block.list.join(", ")}</li>`;
    });

    document.getElementById("uni-tuition").innerHTML =
        `Бакалавриат: ${uni.tuition.bachelor}<br>
         Магистратура: ${uni.tuition.master}<br>
         PhD: ${uni.tuition.phd}`;

    const sch = document.getElementById("uni-scholarships");
    sch.innerHTML = "";
    uni.scholarships.forEach(s => sch.innerHTML += `<li>${s}</li>`);

    document.getElementById("uni-admission").innerText = uni.admission;
    document.getElementById("uni-international").innerText = uni.international;

    // ссылка сайта
    document.getElementById("uni-website-link").href = uni.website;

    showSection("university");
}

// Добавить в сравнение
function addToCompare() {
    if (!compareList.includes(currentUniversity.id)) {
        compareList.push(currentUniversity.id);
        alert("Добавлено!");
    }
}

// Удаление
function deleteFromCompare(id) {
    compareList = compareList.filter(x => x !== id);
    updateComparison();
}

// Таблица сравнения
function updateComparison() {
    const div = document.getElementById("compare-table");

    if (compareList.length === 0) {
        div.innerHTML = "<p>Нет университетов для сравнения</p>";
        return;
    }

    const selected = universities.filter(u => compareList.includes(u.id));

    div.innerHTML = `
        <table>
            <tr>
                <th>Параметр</th>
                ${selected.map(u =>
                    `<th>${u.name}
                        <button onclick="deleteFromCompare(${u.id})" class="delete-btn">×</button>
                     </th>`
                ).join("")}
            </tr>

            <tr>
                <td>Программы</td>
                ${selected.map(u =>
                    `<td>${u.programs.map(p =>
                        `<b>${p.level}:</b> ${p.list.join(", ")}`
                    ).join("<br>")}</td>`
                ).join("")}
            </tr>

            <tr>
                <td>Стоимость</td>
                ${selected.map(u =>
                    `<td>
                        Бакалавр: ${u.tuition.bachelor}<br>
                        Магистр: ${u.tuition.master}<br>
                        PhD: ${u.tuition.phd}
                    </td>`
                ).join("")}
            </tr>

            <tr>
                <td>Стипендии</td>
                ${selected.map(u => `<td>${u.scholarships.join("<br>")}</td>`).join("")}
            </tr>

            <tr>
                <td>Поступление</td>
                ${selected.map(u => `<td>${u.admission}</td>`).join("")}
            </tr>

            <tr>
                <td>Международное</td>
                ${selected.map(u => `<td>${u.international}</td>`).join("")}
            </tr>

            <tr>
                <td>Сайт</td>
                ${selected.map(u =>
                    `<td><a href="${u.website}" class="website-btn" target="_blank">🌐 Перейти</a></td>`
                ).join("")}
            </tr>
        </table>
    `;
}
