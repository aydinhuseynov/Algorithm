/* 1. Klaviaturadan daxil edilən 3 ədədin ortalamasını tapan 
 proqram kodu yazın.
 Giriş verilənlər : 3,4,11
 Çıxış : 6
 Ədədi orta = (birinci eded + ikinci eded+ ... + n-ci eded)/n – n 
 burada ədədlərin sayını ifadə edir*/

function numbers(a, b, c) {
  console.log((a + b + c) / 3);
}
numbers(6, 6, 6);

/*

3. Hər bir dövr operatorundan istifadə edərək (for, while, do 
while) ekrana “MƏN JAVASCRIPTDƏ MASTER OLACAM”
yazısını yazdıran proqram yazın.

*/

var texts = ["Mən", "JavaScriptdə", "Master", "Olacam"];
var combine = "";
for (let i = 0; i < texts.length; i++) {
  combine = combine + " " + texts[i];
}
console.log(combine);

/* 4. 1-dən 100-ə qədər olan ədədlərin cəmini tapan proqram yazın.*/
var sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

/* 5. 1-dən 10-a qədər ədədləri yan-yana yazdıran və
aralarında , olan (sonuncu ədəd xaric) proqram kodu yazın. */
var sideByside = "";
for (let i = 1; i <= 10; i++) {
  //   sideByside = sideByside +i +","

  sideByside = sideByside + "," + i;
}
console.log(sideByside);

/* 6. Klaviaturadan daxil edilən bir ədədin faktorialını hesablayan 
proqram tərtib edin.
 */

var multiple = 1;
function faktorial(i) {
  for (let i = 1; i <= 5; i++) {
    multiple = multiple * i;
  }
  console.log(multiple);
}
faktorial(5);

/*
7. Aşağıda təyin edilən f(x,y) funksiyasınn klaviaturadan daxil 
edilən x və y dəyərləri üçün proqram kodunu tərtib edin.
x>0, y<0 isə f(x,y) = 4x+2y+4
x>0, y=0 isə f(x,y) = 2x-y+3
x<0, y>0 isə f(x,y) = 3x+4y+3
Giriş verilənləri : x=25, y=-5 Bu zaman , x sıfırdan böyük olsa 
da, y 0-dan kiçikdir. Deməli, birinci şərt ödənir.
Çıxış : 4*25+2*(-5) + 4 = 94
*/

function calculate(x, y) {
  if (x > 0 && y < 0) {
    console.log(4 * x + 2 * y + 4);
  } else if (x > 0 && y === 0) {
    console.log(2 * x - y + 3);
  } else if (x < 0 && y > 0) {
    console.log(3 * x + 4 * y + 3);
  } else {
    console.log("something went wrong");
  }
}
calculate(25, -5);

/*
8. Boloniya sisteminə əsasən, tələbələrin akkreditasiyası üçün 
tələb olunan qiymətləndirmə sistemini hərflərlə yazan proqram 
tərtib edin. Məsələn, Tələbə 91-100 alıbsa, “A”, 51-60 alıbsa E 
yazdırsın. 51-dən aşağı halda “F”.
Giriş verilənləri : 67
Çıxış: D
*/

function finalPoint(x) {
  if (x >= 91 && x <= 100) {
    console.log(`Your final point is ${x}-A`);
  } else if (x >= 81 && x <= 90) {
    console.log(`Your final point is ${x}-B`);
  } else if (x >= 71 && x <= 80) {
    console.log(`Your final point is ${x}-C`);
  } else if (x >= 61 && x <= 70) {
    console.log(`Your final point is ${x}-D`);
  } else if (x >= 51 && x <= 60) {
    console.log(`Your final point is ${x}-E`);
  } else if (x > 100 || x < 0) {
    console.log("Final point can not be negative and above 100");
  } else {
    console.log(
      "We regret to inform you that you have failed your final exam.Best of good luck next time"
    );
  }
}
finalPoint(67);

/*
9. Vurma cədvəlini yaradan proqram kodunu yazın. Nümunə
üçün,hər bir sətr bir tab qədər boşluq yaratmalıdır və bu kod “\t”
kodudur.
Giriş veriləni yoxdur.
*/




