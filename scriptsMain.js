// Obtener todos los enlaces con data-region
const links = document.querySelectorAll('a[data-region]');
const backgrounds = document.querySelectorAll('.bg');

const regionBody = {
    home: document.querySelector('main.home'),
    kanto: document.querySelector('main.kanto'),
    johto: document.querySelector('main.johto'),
    sinnoh: document.querySelector('main.sinnoh')
};

// Variable para controlar si una animación se esta ejecutando para evitar errroes uwu 
let isAnimating = false;

// Función para cambiar el fondo
function changeBackground(targetRegion) {
    if (isAnimating) return;
    const currentMain = document.querySelector('main.active');
    const targetMain = regionBody[targetRegion];
    const currentBg = document.querySelector('.bg.active');
    //fondo actual y al que se quiere cambiar
    const targetBg = document.getElementById('bg-' + targetRegion);
    
    // Si ya estamos en el fondo destino, no hacer nada 
    if(currentMain === targetMain) return; //Evita que desaparezca el contenido xd
    if (currentBg === targetBg) return; //Evita que desaparezca el background xd 
    
    
    //empezamos a animar si no tienen el mismo Bg
    isAnimating = true;
    
    // Mostrar y animar entrada del fondo destino INMEDIATAMENTE
    targetBg.classList.add('active', 'slide-in');
    targetMain.classList.add('active', 'fade-in');

    // Animar salida del fondo actual AL MISMO TIEMPO
    currentBg.classList.add('slide-out');
    currentMain.classList.add('fade-out');
    // Después de que termine la animación
    setTimeout(() => {
        // Ocultar el fondo actual y limpiar clases
        currentMain.classList.remove('active', 'fade-out');
        targetMain.classList.remove('fade-in');  // Solo remueve la animación, mantén 'active'
        currentBg.classList.remove('active', 'slide-out');
        targetBg.classList.remove('slide-in');
        isAnimating = false;
    }, 600);
}

// listener para cada boton de navegación
links.forEach(link => {
    link.addEventListener('click', (e) => {
        //evita que me mande a otra pagina xd
        e.preventDefault();
        // obtener la region por el data attribute
        const targetRegion = link.getAttribute('data-region');
        changeBackground(targetRegion);
    });
});
