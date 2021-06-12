const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <main
            style={{
                textAlign: 'center',
                backgroundColor: '#3c444c',
                padding: '10px 0',
                color: '#bdbdbd',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
            }}
        >
            <strong>{year} | All rights reserved</strong>
        </main>
    );
};

export default Footer;
