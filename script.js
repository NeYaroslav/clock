setInterval(() => {
    var dataString = new Date();
    let result = `${dataString}`
    let dataArray = result.split(' ')
    // console.log(dataArray)
    let currentTime = dataArray[4]
    // console.log(currentTime)
    let currentTimeArray = currentTime.split(':')
    // console.log(currentTimeArray)
    let hourArrow = currentTimeArray[0] > 12? (Number(currentTimeArray[0]) - 12) * 60 + Number(currentTimeArray[1])
    :Number(currentTimeArray[0]) * 60 + Number(currentTimeArray[1])

    let minuteArrow = (Number(currentTimeArray[1]) * 60) + Number(currentTimeArray[2])

    let hourArrowDOM = document.querySelector(".hour__arrow")
    hourArrowDOM.style.transform = `rotate(${hourArrow * 0.5}deg)`;

    let minuteArrowDOM = document.querySelector(".minute__arrow")
    minuteArrowDOM.style.transform = `rotate(${minuteArrow * 0.1}deg)`;

    let secondArrowDOM = document.querySelector(".second__arrow")
    secondArrowDOM.style.transform = `rotate(${Number(currentTimeArray[2]) * 6}deg)`;
}, 1000);
