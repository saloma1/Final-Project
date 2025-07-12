    function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let value = Math.min(start + Math.floor((progress / duration) * range), end);
        obj.innerText = value;
        if (value < end) {
    requestAnimationFrame(step);
        }
                            }

    requestAnimationFrame(step);
    }

    animateValue("direct-counter", 0, 150, 1000);
    animateValue("indirect-counter", 0, 7600, 2000);
