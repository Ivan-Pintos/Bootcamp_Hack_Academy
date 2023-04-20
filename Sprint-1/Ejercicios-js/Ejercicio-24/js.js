const TableBody = document.querySelector("#Table tbody");
const InputSearch = document.querySelector("#search");
fetch(
  "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json"
)
  .then((response) => response.json())
  .then((datas) =>
    datas.forEach((dato) => {
      TableBody.innerHTML += `
        <tr>
            <th scope="row">${dato.id}</th>
            <td>${dato.firstname}</td>
            <td>${dato.lastname}</td>
            <td>${dato.age}</td>
        </tr>`;
    })
  )
  .catch((error) => console.error(error));

InputSearch.addEventListener("input", () => {
  fetch(
    "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json"
  )
    .then((response) => response.json())
    .then((datas) => {
      TableBody.innerHTML = "";
      datas.forEach((dato) => {
        if (InputSearch.value == "") {
          TableBody.innerHTML += `
                <tr>
                    <th scope="row">${dato.id}</th>
                    <td>${dato.firstname}</td>
                    <td>${dato.lastname}</td>
                    <td>${dato.age}</td>
                </tr>`;
        } else {
          if (
            changeTildesToNormalString(
              `${dato.id}${dato.firstname}${dato.lastname}${dato.age}`
            ).includes(changeTildesToNormalString(InputSearch.value))
          ) {
            TableBody.innerHTML += `
        <tr>
            <th scope="row">${dato.id}</th>
            <td>${dato.firstname}</td>
            <td>${dato.lastname}</td>
            <td>${dato.age}</td>
        </tr>`;
          }
        }
      });
      if (TableBody.innerHTML.trim() === "") {
        TableBody.innerHTML += `
        <tr>
            <td colspan="4">
                <div class="alert alert-light" role="alert">
                    No hay ningun resultado para tu busqueda
                </div>
            </td>
        </tr>`;
      }
    });
});

function changeTildesToNormalString(str) {
  const tildes = "áéíóú";
  const withoutTildes = "aeiou";
  str = str.toLowerCase();
  let newstr = "";
  for (const char of str) {
    if (tildes.indexOf(char) !== -1) {
      newstr += withoutTildes[tildes.indexOf(char)];
    } else {
      newstr += char;
    }
  }
  return newstr;
}
