import './footer.css';

export default function Footer() {
    const getAno = new Date().getFullYear();

    return(
        <footer className='containerFooter'>
            <p className='textoRodape'>
                Desenvolvido por João Lucas Melo - &copy; {getAno}
            </p>
        </footer>
    );
}