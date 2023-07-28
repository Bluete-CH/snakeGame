function init() {
    let timestampLastRefresh = 0;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.beginPath();

    const circle1 = new Path2D();
    circle1.arc(50, 75, 30, 0, 2 * Math.PI);

    const circle2 = new Path2D();
    circle2.arc(175, 75, 50, 0, 2 * Math.PI);

    const circle3 = new Path2D();
    circle3.arc(350, 75, 70, 0, 2 * Math.PI);

    context.fillStyle = "#0A1172";
    context.fill(circle3);
    context.fillStyle = "#2832C2";
    context.fill(circle2);
    context.fillStyle = "#63C5DA";
    context.fill(circle1);
    window.requestAnimationFrame(refresh);

    function refresh(timestamp) {
        const goneTime = timestamp - timestampLastRefresh;

        if (goneTime > 5000) {
            const randomNumberX1 = Math.floor(Math.random() * 300);
            const randomNumberY1 = Math.floor(Math.random() * 300);
            const randomNumberX2 = Math.floor(Math.random() * 300);
            const randomNumberY2 = Math.floor(Math.random() * 300);
            const randomNumberX3 = Math.floor(Math.random() * 300);
            const randomNumberY3 = Math.floor(Math.random() * 300);

            context.beginPath();
            context.clearRect(0, 0, canvas.width, canvas.height);
            const circle4 = new Path2D();
            circle4.arc(randomNumberX1, randomNumberY1, 30, 0, 2 * Math.PI);
            const circle5 = new Path2D();
            circle5.arc(randomNumberX2, randomNumberY2, 50, 0, 2 * Math.PI);
            const circle6 = new Path2D();
            circle6.arc(randomNumberX3, randomNumberY3, 70, 0, 2 * Math.PI);

            context.fillStyle = "#0A1172";
            context.fill(circle6);
            context.fillStyle = "#2832C2";
            context.fill(circle5);
            context.fillStyle = "#63C5DA";
            context.fill(circle4);
            timestampLastRefresh = timestamp;
        }
        window.requestAnimationFrame(refresh);
    }
}