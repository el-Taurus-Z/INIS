const workspace = document.querySelector("#workspace");
const blocks = workspace.querySelectorAll(".target");
let isActiveBlocks = [];
let isMovingBlocks = [];
let countDblClickBlocks = [];
let isSuspended = false;
let isStaticBlock = false;

blocks.forEach((block, key) => {
    isActiveBlocks[key] = false;
    isMovingBlocks[key] = false;
    countDblClickBlocks[key] = 0;
});

blocks.forEach((block, key) => {

    //hover mouse over div, move and click on div 

    let x = 0;
    let y = 0;
    let defaultX = 0;
    let defaultY = 0;
    let beginX = 0;
    let beginY = 0;
    let beginXTwo = 0;
    let beginYTwo = 0;
    let lineOne = 0;

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {

            if (isActiveBlocks[key]) {
                block.style.left = defaultX + "px";
                block.style.top = defaultY + "px";
            }

            resetColor();
            countDblClickBlocks[key] = 0;
            isActiveBlocks[key] = false;
            isMovingBlocks[key] = false;
            isSuspended = false;

        }
    });

    block.addEventListener("mousedown", e => {

        if (!isSuspended) {
            x = block.offsetLeft - e.clientX;
            y = block.offsetTop - e.clientY;
            isActiveBlocks[key] = true;
        }

        defaultX = block.offsetLeft;
        defaultY = block.offsetTop;

    });

    window.addEventListener("mousemove", e => {
        if (isActiveBlocks[key]) {

            isMovingBlocks[key] = true;
            block.style.left = e.clientX + x + "px";
            block.style.top = e.clientY + y + "px";

        }
    });

    block.addEventListener("mouseup", () => {
        if (!isSuspended) {

            if (!isMovingBlocks[key]) {
                resetColor();
                block.style.backgroundColor = "blue";
            }

            for (let i = 0; i < isActiveBlocks.length; i++) {
                isActiveBlocks[i] = false;
                isMovingBlocks[i] = false;
            }

        }
    });

    window.addEventListener("touchmove", e => {
        if (isActiveBlocks[key]) {
            e.preventDefault();
            isMovingBlocks[key] = true;
            if (e.changedTouches.length === 2 && e.changedTouches[0].target === e.changedTouches[1].target) {

                

            } else
                if (!isStaticBlock) {

                    for (let i = 0; i < e.changedTouches.length; i++) {
                        if (e.changedTouches[i].target === block) {
                            block.style.left = e.changedTouches[i].clientX + x + "px";
                            block.style.top = e.changedTouches[i].clientY + y + "px";
                            block.style.backgroundColor = "blue";
                            break;
                        }
                    }

                }

        }
    }, {passive: false});

    document.addEventListener("touchend", e => {
        isMovingBlocks[key] = false;
        isActiveBlocks[key] = false;
        isStaticBlock = false;
    });

    block.addEventListener("touchstart", e => {
        if (!isMovingBlocks[key]) {
            resetColor();
            block.style.backgroundColor = "blue";
        }
        isActiveBlocks[key] = true;
        isMovingBlocks[key] = false;
        x = block.offsetLeft - e.changedTouches[0].clientX;
        y = block.offsetTop - e.changedTouches[0].clientY;
    });

    //double click on div

    block.addEventListener("dblclick", () => {
        countDblClickBlocks[key]++;

        if (countDblClickBlocks[key] === 1 && !isSuspended) {
            resetColor();
            block.style.backgroundColor = "blue";
            isActiveBlocks[key] = true;
            isSuspended = true;
        } else {

            for (let i = 0; i < isActiveBlocks.length; i++) {
                isActiveBlocks[i] = false;
                isMovingBlocks[i] = false
                countDblClickBlocks[i] = 0;
            }

            countDblClickBlocks[key] = 0;
            isActiveBlocks[key] = false;
            isMovingBlocks[key] = false;
            isSuspended = false;

        }
    });

});

//click on background

workspace.addEventListener("click", (event) => {
    if (event.target.className !== "target") {
        resetColor();
    }
});

function resetColor() {
    blocks.forEach(block => {
        block.style.backgroundColor = "red";
    });
}

