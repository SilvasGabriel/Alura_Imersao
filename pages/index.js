import { useState } from 'react'
import config from '../config.json'
import { useRouter } from 'next/router'
import { Box, Image, Button, Text, TextField, Icon } from '@skynexui/components'

const Title = ({ children, tag }) => {

    const Tag = tag || 'h1'

    return (
        <>
            <style jsx>{`
                ${Tag} {
                    color: ${config.theme.colors.neutrals['050']};
                    font-size: 2.188rem;
                    font-weight: 600;
                }

                h1 {
                    color: red;
                    font-size: 1.5rem;
                    font-weight: 600;
                }
            `}
            </style>

            <Tag>{children}</Tag>

        </>
    )
}

const HomePage = () => {

    //const username = 'SilvasGabriel'
    const [username, setUsername] = useState('SilvasGabriel')
    const routes = useRouter()

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: config.theme.colors.neutrals['000'],
                    backgroundImage: 'url(https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%',
                        maxWidth: '43.75rem',
                        borderRadius: '0.3125rem',
                        padding: '2rem',
                        margin: '1rem',
                        boxShadow: ' 0 0.125rem 0.625rem 0 rgb( 0 0 0 / 20%)',
                        backgroundColor: config.theme.colors.neutrals[700],
                        
                    }}
                >
                    {/** Formulário */}
                    <Box as="form"
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: {
                                xs: '100%',
                                sm: '50%',
                            },
                            textAlign: 'center',
                            marginBottom: '2rem',
                        }}
                        onSubmit={(e) => {
                            e.preventDefault()
                            console.log('Submetido!')
                            routes.push('/chat')
                        }}
                    >

                        <Title tag="h2">
                            <Icon
                                label="Icon Component"
                                name="FaMugHot"
                                size="4ch"
                            />  
                        </Title>    

                        <Text
                            vatiant="body3"
                            styleSheet={{
                                fontFamily: '',
                                fontSize: '1.5rem',
                                marginTop: '2rem',
                                marginBottom: '2rem',
                                color: config.theme.colors.neutrals['000'],
                            }}>

                            {config.name}

                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: config.theme.colors.neutrals[900],
                                    mainColor: config.theme.colors.neutrals[800],
                                    mainColorHighlight: config.theme.colors.primary[800],
                                    backgroundColor: config.theme.colors.neutrals['050'],
                                }
                            }}
                            styleSheet={{
                                fontFamily: 'Open Sans, sans-serif',
                            }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value) }
                        />

                        <Button
                            type='submit'
                            label='Entrar'
                            disabled={username.length < 2}
                            fullWidth
                            buttonColors={{
                                contrastColor: config.theme.colors.neutrals['000'],
                                mainColor: config.theme.colors.primary[800],
                                mainColorLight: config.theme.colors.primary[700],
                                mainColorStrong: config.theme.colors.primary[900],
                            }}

                        />

                    </Box>
                    {/** Formulário */}

                    {/*Área da Foto*/}

                    <Box 
                        styleSheet={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            maxWidth:'12.5rem',
                            padding:'1rem',
                            backgroundColor: config.theme.colors.neutrals[700],
                            border: '0.063rem solid',
                            borderColor: config.theme.colors.primary['050'],
                            borderRadius: '0.625rem',
                            flex: 1,
                            minHeigth: '15rem',
                        }}
                    >
                    
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '1rem',
                            }}
                            src={`https://github.com/${username}.png`}
                        />

                        <Text
                            variant="body4"
                            styleSheet={{
                                color: config.theme.colors.neutrals['100'],
                                backgroundColor: config.theme.colors.neutrals[700],
                                padding: '0.1875rem 0.625rem',
                                borderRadius: '62.5rem',
                                fontSize: '1.4rem',
                                fontFamily:'',
                            }}
                        >
                            {username}
                        </Text>

                    </Box>

                </Box>

            </Box>
        </>
    )
}

export default HomePage

/*
const HomePage = () => {
    return (
        <div>
            <GlobalStyle />
            <Title tag="h2">Bem vindos!</Title>
            <h2>Chá_T - Conversas sobre chás</h2>
        </div>
    );
};

export default HomePage;
*/