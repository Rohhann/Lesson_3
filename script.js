let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов.", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if ( (typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
                && a != '' && b != '' && a.length < 50) {
            console.log("DONE!");
            appData.expenses[a] = b;
        } else {
            console.log("Недопустимое значение!");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudjet() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudjet();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка.");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка.");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий достаток!");
    } else {
        console.log("Произошла ошибка!");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        persent = +prompt("Под какой процент?");

    appData.monthIncome = save / 100 / 12 * persent;
    alert("Дохов в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {    
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses(); //Последнее изменение