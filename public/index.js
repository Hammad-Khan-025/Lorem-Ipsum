const text = [
    "1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse.",

    "2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque.",

    "3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque, eligendi dignissimos deserunt laborum minus, dicta cumque? Amet aspernatur velit reiciendis placeat, iste maxime ex, quos cupiditate quia quibusdam officiis architecto nobis ipsam recusandae nemo, neque obcaecati assumenda consequatur a atque animi fuga. Eius laborum sed illo ullam necessitatibus labore? Tempora, vitae?",

    "4) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque, eligendi dignissimos deserunt laborum minus, dicta cumque? Amet aspernatur velit reiciendis placeat, iste maxime ex, quos cupiditate quia quibusdam officiis architecto nobis ipsam recusandae nemo, neque obcaecati assumenda consequatur a atque animi fuga. Eius laborum sed illo ullam necessitatibus labore? Tempora, vitae? Ad laudantium molestiae tempora? Voluptas rem error ad? Tenetur, iste. Est asperiores cumque debitis ipsam? Nostrum quibusdam saepe, odio molestias, quam at atque maxime pariatur nam provident harum.",

    "5) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque, eligendi dignissimos deserunt laborum minus, dicta cumque? Amet aspernatur velit reiciendis placeat.",

    "6) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque, eligendi dignissimos deserunt laborum minus, dicta cumque? Amet aspernatur velit reiciendis placeat, iste maxime ex, quos cupiditate quia quibusdam officiis architecto nobis ipsam recusandae nemo, neque obcaecati assumenda consequatur a atque animi fuga. Eius laborum sed illo ullam necessitatibus labore? Tempora, vitae? Ad laudantium molestiae tempora? Voluptas rem error ad? Tenetur, iste. Est asperiores cumque debitis ipsam? Nostrum quibusdam saepe, odio molestias, quam at atque maxime pariatur nam provident harum.",

    "7) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse.",

    "8) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque, eligendi dignissimos deserunt laborum minus, dicta cumque? Amet aspernatur velit reiciendis placeat, iste maxime ex, quos cupiditate quia quibusdam officiis architecto nobis ipsam recusandae nemo, neque obcaecati assumenda consequatur a atque animi fuga. Eius laborum sed illo ullam necessitatibus labore? Tempora, vitae? Ad laudantium molestiae tempora? Voluptas rem error ad? Tenetur, iste. Est asperiores cumque debitis ipsam? Nostrum quibusdam saepe, odio molestias, quam at atque maxime pariatur nam provident harum.",

    "9) Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia illo praesentium velit, quasi doloribus esse. Delectus non qui obcaecati nostrum, ipsam sit velit tenetur distinctio deleniti assumenda porro neque, eligendi dignissimos deserunt laborum minus, dicta cumque? Amet aspernatur velit reiciendis placeat, iste maxime ex."
]

const btn = document.querySelector('.btn')
const para = document.querySelector('.text-lorem')
const input = document.getElementById('inputs')

btn.addEventListener("click", paragraph)

function paragraph(){
    const value = parseInt(input.value)

    if (isNaN(value) || value <= 0 || value >= 10) {
        alert("Please enter a value between 1 and 9");
    } else {
        let paragraphs = "";
        for (let i = 0; i < value; i++) {
            paragraphs += text[i] + "<br><br>"; // Add line breaks between paragraphs
        }
        para.innerHTML = paragraphs;
    }
    input.value = "";
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        paragraph();
    }
});