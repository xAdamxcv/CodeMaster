const { default: SimpleStepButton } = require("./SimpleStepButton");
const { default: SimpleStep_Title } = require("./SimpleStep_Title");

let SimpleStep = () =>{
    return(
        <>
        <SimpleStep_Title />
        <section className="SimpleStep">
            <div>
                <h4 className="icon-One"></h4>
                <h3>Wyberz rzeczy</h3>
                <p>Ubrania,zabawki,sprzet i inne</p>
            </div>
            <div>
                <h4 className="icon-Two"></h4>
                <h3>Spakuj je</h3>
                <p>skorzystaj z<br/> worków na śmieci</p>
            </div>
            <div>
                <h4 className="icon-Three"></h4>
                <h3>Zdecyduj komu<br/> chcesz pomóc</h3>
                <p>Wybierz zaufane<br/> miejsce</p>
            </div>
            <div>
                <h4 className="icon-Four"></h4>
                <h3>Zamów kuriera</h3>
                <p>kurier przyjedzie<br/> w dogodnym terminie</p>
            </div>
        </section>
        <SimpleStepButton />
        </>
    )
}

export default SimpleStep