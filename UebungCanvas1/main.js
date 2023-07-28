function init() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        const rectangle = new Path2D();
        rectangle.rect(20, 20, 110, 110);

        const rectangleFilled = new Path2D();
        rectangleFilled.rect(30, 30, 90, 90);

        const circle = new Path2D();
        circle.arc(75, 75, 40, 0, 2 * Math.PI);

        const circleFilled = new Path2D();
        circleFilled.arc(75, 75, 30, 0, 2 * Math.PI);

        ctx.stroke(rectangle);
        ctx.fillStyle = "#ADD8E6";
        ctx.fill(rectangleFilled);
        ctx.stroke(circle);
        ctx.fillStyle = "#00008B";
        ctx.fill(circleFilled);
    }

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        const outerCircle = new Path2D();
        outerCircle.arc(210, 75, 50, 0, Math.PI * 2, true);

        const mouthCircle = new Path2D();
        mouthCircle.arc(210, 75, 35, 0, Math.PI, false);

        const eyeCircle1 = new Path2D();
        eyeCircle1.arc(195, 65, 5, 0, Math.PI * 2, true);

        const eyeCircle2 = new Path2D();
        eyeCircle2.arc(225, 65, 5, 0, Math.PI * 2, true);

        ctx.fillStyle = "#FFD528";
        ctx.fill(outerCircle);
        ctx.stroke(mouthCircle);
        ctx.fillStyle = "#010203";
        ctx.fill(eyeCircle1);
        ctx.fill(eyeCircle2);
    }
}