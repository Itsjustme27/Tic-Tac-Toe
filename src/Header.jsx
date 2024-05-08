import reactSvg from './assets/react.svg'

export default function Header() {
    return (
        <>
            <div className="head">
                <h1>TIC-TAC-TOE <img src={reactSvg} alt="Logo" /></h1>
            </div>
        </>
    );
}