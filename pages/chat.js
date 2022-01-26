import { Box, Image, Button, Text, TextField,Icon } from '@skynexui/components'
import { useState } from 'react';
import config from '../config.json'

const Chat = () => {

    /*
        Usuário
            -> Digita no campo textarea
            -> Aperta enter para enviar
            -> Adicionar o texto na listagem 

        Dev
            [x] Campo criado
            [ ] usar o onChange / useState(ter if para mudar variavel) 
            [ ] Lista mensagens
    */

    const [mensagem, setMensagem] = useState('')
    const [listaMensagens, setListaMensagens] = useState([])

    const handleNovaMensagem = (novaMensagem) => {

        const mensagem = {

            id: listaMensagens.length + 1,
            de: 'vanessaantonini',
            textoMessage: novaMensagem,

        }

        setListaMensagens([
            ...listaMensagens,
            mensagem,
        ])
        setMensagem('')

    }

    return (

        <Box
            styleSheet={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: config.theme.colors.primary['000'],
                backgroundImage: `url(https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply',
                color: config.theme.colors.neutrals['000'],
            }}
        >

            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 0.125rem 0.625rem 0 rgb(0 0 0 / 50%)',
                    borderRadius: '0.313rem',
                    backgroundColor: config.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '2rem',
                }}
            >
                <Header />

                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: config.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '0.313rem',
                        padding: '1rem',
                        fontFamily: 'Open Sans, sans-serif',
                    }}
                >

                    <MessageList mensagens={listaMensagens} />
                    {/*listaMensagens.map((message) => {
                    return(
                        <li key={message.id}>
                            {message.de} : {message.textoMessage}
                        </li>
                    )
                    })
                */
                    }

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >

                        <TextField
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    handleNovaMensagem(mensagem)
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type='textarea'
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '0.313rem',
                                padding: '0.375rem 0.5rem',
                                backgroundColor: config.theme.colors.neutrals[800],
                                marginRight: '0.75rem',
                                color: config.theme.colors.neutrals['000'],
                                fontFamily: 'Open Sans, sans-serif',
                            }}
                        />

                    </Box>

                </Box>

            </Box>

        </Box>
    );
};

export default Chat;

const Header = () => {

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '1rem',
                }}
            >

                <Text variant='heading4'>
                    Chat
                </Text>

                <Button
                    variant='tertiary'
                    colorVariant='dark'
                    label='Logout'
                    href='/'
                    styleSheet={{

                    }}
                />

            </Box>
        </>
    )

}

const MessageList = ({ mensagens }) => {

    //console.log(mensagens)
    
    return (

        <Box
            tag='ul'
            styleSheet={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: config.theme.colors.neutrals[200],
                marginBottom: '1rem',
            }}
        >

            {mensagens.map((mensagemAtual) => {

                return (

                    <Text
                        key={mensagemAtual.id}
                        tag='li'
                        styleSheet={{
                            borderRadius: '0.313rem',
                            padding: '0.375rem',
                            marginBottom: '0.75rem',
                            hover: {
                                backgroundColor: config.theme.colors.neutrals[700]
                            }
                        }}
                    >

                        <Box
                            styleSheet={{
                                marginBottom: '0.5rem',
                            }}
                        >

                            <Image
                                styleSheet={{
                                    width: '1.25rem',
                                    height: '1.25rem',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '0.5rem',
                                }}
                                src={`https://github.com/vanessametonini.png`}
                            />

                            <Text tag='strong'>
                                {mensagemAtual.de}
                            </Text>

                            <Text
                                styleSheet={{
                                    fontSize: '',
                                    marginLeft: '0.5rem',
                                    color: config.theme.colors.neutrals[300]
                                }}
                                tag='span'
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>

                        </Box>

                        {mensagemAtual.textoMessage}

                    </Text>

                )
            })}

        </Box>

    )
}
