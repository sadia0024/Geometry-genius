function calculateEllipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    const area = 3.1416 * a * b;

    setInnerText('ellipse-area', area)
}