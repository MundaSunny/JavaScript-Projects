function changeBackgroundColor() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }

    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', (e) => {
        // console.log(e.target);
        const child= e.target;
        const body= document.querySelector('body');
        body.style.backgroundColor= child.id ;
        
    });
