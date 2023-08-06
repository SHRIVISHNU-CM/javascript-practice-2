
function calculateDays(targetDate) {
    const target = new Date(targetDate);
    const today = new Date();
    const timeDifference = target.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

const targetDate = '2023-08-31';
console.log(calculateDays(targetDate));


