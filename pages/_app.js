const GlobalStyle = () => {

    return (
        <>
            <style global jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
            
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    list-style: none;
                }

                html, body, #__next {
                    min-height: 100vh;
                    display: flex;
                    flex: 1;
                    font-family: 'Pacifico', cursive;
                    overflow: hidden;
                }

                #__next {
                    flex: 1;
                  }
                  #__next > * {
                    flex: 1;
                  }

            `}</style>
        </>
    )

}

const MyApp = ({Component, pageProps}) => {
    //console.log('roda em todas as páginas!')
    return(
        <>
        <GlobalStyle/>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp