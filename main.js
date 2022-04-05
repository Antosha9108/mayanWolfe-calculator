//required abilities of calculator:
// accept user inputs
//should accept decimal numbers
// store the inputs
// recognize user inputs and perform calculations
// return the result

//optional features:
// should accept longer arithmetic features
//display all input as it is being entered
// store previous total as start of next operation
// clear button should clear all entries
// should prevent invalid inputs

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click',event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        } else {
            calculator.parseInput(value)
            //console.log(target)
        }    
    })


    const calculator = {
        displayText: '0',
        prevTotal: null,

        parseInput(value) {
            
            //have any of the special buttons been clicked
            switch (value) {
                case '=':
                    this.calcAnswer(this.displayText)
                    break;
                case 'AC':
                    this.clearAll()
                    break;
                case '.':
                    if (this.displayText == 0) {
                        this.addText('0.')
                    } else {
                        addText(value)
                    }
                    break;
                default:
                    this.addText(value)
                    break;
                    //add value to text string
            }

        

        },

        addText(value) {
            if (this.displayText === '0'){
                this.displayText = ''
            } else  if (this.prevTotal !==null) {
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if (isNaN (+(value))&& isNaN(+(this.displayText))){
                if(isNaN(this.displayText.length-1)) {
                    return;
                }
            }
            this.displayText += value
            this.outputText(this.displayText)
        },

        outputText(text) {
            document.querySelector('.calculator-screen').value = text
        },

        calcAnswer(equation) {
            let result = Function('return ' + equation)()
            this.outputText(result)
        },

        clearAll () {
            this.displayText = '0',
            this.prevTotal = null,
            this.outputText(this.displayText)
        }
    }