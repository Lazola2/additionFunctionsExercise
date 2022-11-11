function addition(num1, num2) {
    let vFlag = Number.isFinite(num1) && Number.isFinite(num2); 
    if (!(vFlag)) {
        console.log("Inputs are not finite numbers");
        return;
    }
    document.write(num1 + num2);
}

addition(2, "fg");