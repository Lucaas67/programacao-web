exports.renderCalculator = (req, res) => {
    res.render('index');
  };
  
  exports.calculate = (req, res) => {
    const { numA, numB, operation } = req.body;
    let result;
  
    switch (operation) {
      case '+':
        result = parseFloat(numA) + parseFloat(numB);
        break;
      case '-':
        result = parseFloat(numA) - parseFloat(numB);
        break;
      case '*':
        result = parseFloat(numA) * parseFloat(numB);
        break;
      case '/':
        result = parseFloat(numA) / parseFloat(numB);
        break;
    }
  
    res.render('index', { result });
  };