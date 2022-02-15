function script() {
  let from = document.getElementById("select__1").value;
  let to = document.getElementById("select__2").value;
  let cantidad = document.getElementById("input").value;
  let screen = document.getElementById("screen");
  let result;
  //  FROM USD TO X
  if (from == "usd" && to == "mxn") {
    let usd__mxn = 20.54;
    result = cantidad * usd__mxn;
  } else if (from == "usd" && to == "cop") {
    let usd__cop = 3925;
    result = cantidad * usd__cop;
  } else if (from == "usd" && to == "eur") {
    let usd__eur = 0.88;
    result = cantidad * usd__eur;
  } else if (from == "usd" && to == "uk") {
    let usd__uk = 0.74;
    result = cantidad * usd__uk;
    // FROM MXN TO X
  } else if (from == "mxn" && to == "usd") {
    let mxn__usd = 0.49;
    result = cantidad * mxn__usd;
  } else if (from == "mxn" && to == "cop") {
    let mxn__cop = 191.12;
    result = cantidad * mxn__cop;
  } else if (from == "mxn" && to == "eur") {
    let mxn__eur = 0.043;
    result = cantidad * mxn__eur;
  } else if (from == "mxn" && to == "uk") {
    let mxn__uk = 0.036;
    result = cantidad * mxn__uk;
    // FROM COP TO X
  } else if (from == "cop" && to == "usd") {
    let cop__usd = 0.00025;
    result = cantidad * cop__usd;
  } else if (from == "cop" && to == "mxn") {
    let cop__mxn = 0.0052;
    result = cantidad * cop__mxn;
  } else if (from == "cop" && to == "eur") {
    let cop__eur = 0.00022;
    result = cantidad * cop__eur;
  } else if (from == "cop" && to == "uk") {
    let cop__uk = 0.00019;
    result = cantidad * cop__uk;
    // FROM EUR TO X
  } else if (from == "eur" && to == "usd") {
    let eur__usd = 1.14;
    result = cantidad * eur__usd;
  } else if (from == "eur" && to == "mxn") {
    let eur__mxn = 23.31;
    result = cantidad * eur__mxn;
  } else if (from == "eur" && to == "cop") {
    let eur__cop = 4.456;
    result = cantidad * eur__cop;
  } else if (from == "eur" && to == "uk") {
    let eur__uk = 0.84;
    result = cantidad * eur__uk;
    // FROM UK TO X
  } else if (from == "uk" && to == "usd") {
    let uk__usd = 1.36;
    result = cantidad * uk__usd;
  } else if (from == "uk" && to == "mxn") {
    let uk__mxn = 27.88;
    result = cantidad * uk__mxn;
  } else if (from == "uk" && to == "cop") {
    let uk__cop = 5.327;
    result = cantidad * uk__cop;
  } else if (from == "uk" && to == "eur") {
    let uk__eur = 1.2;
    result = cantidad * uk__eur;
  } else {
      result = `0`
  }

  if(result!='0'){
    screen.innerHTML = `<h3 id="screen__text">${cantidad} ${from} en ${to} son ${result} ${to}</h3>`;
  } else {
    screen.innerHTML = `<h3 id="screen__text">No puedes convertir una moneda a ella misma.</h3>`
  }

  console.log(`from ${from} to ${to} = ${result}`);
}
