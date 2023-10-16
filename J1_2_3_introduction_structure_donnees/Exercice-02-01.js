let a = 1;

function calcul() {
  let a_local = 2 + a;

  console.log(a_local, "calcul");

  function sub_calcul() {
    let b = a_local + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();

function calculAlternative(a) {
  let result = 2 + a;

  console.log(result, "calcul");

  function sub_calcul() {
    let b = result + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calculAlternative(a);