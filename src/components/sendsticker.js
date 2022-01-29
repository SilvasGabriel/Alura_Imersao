import {useState} from 'react'
import {Box, Button, Text, Image} from '@skynexui/components'
import  config  from '../../config.json'

const Sendsticker = (prop) => {

    const [isOpen, setIsOpen] = useState('')

    //console.log('Olha o que tem na prop: ', prop)

    return (
        <Box
          styleSheet={{
            position: 'relative',
          }}
        >

          <Button
            styleSheet={{
              borderRadius: '50%',
              padding: '0 0.188rem 0 0',
              minWidth: '3.125rem',
              minHeight: '3.125rem',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
              lineHeight: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: config.theme.colors.neutrals[300],
              filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
              hover: {
                filter: 'grayscale(0)',
              }
            }}
            label="😋"
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '0.313rem',
                position: 'absolute',
                backgroundColor: config.theme.colors.neutrals[800],
                width: {
                  xs: '12.5rem',
                  sm: '18.125rem',
                },
                height: '18.75rem',
                right: '1.875rem',
                bottom: '1.875rem',
                padding: '1rem',
                boxShadow: 'rgba(4, 4, 5, 0.15) 0 0 0 0.063rem, rgba(0, 0, 0, 0.24) 0 0.5rem 1rem 0',
              }}
              onClick={() => setIsOpen(false)}
            >

              <Text
                styleSheet={{
                  color: config.theme.colors.neutrals["000"],
                  fontWeight: 'bold',
                }}
              >
                Stickers
              </Text>

              <Box
                tag="ul"
                styleSheet={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  flex: 1,
                  paddingTop: '1rem',
                  overflow: 'scroll',
                }}
                className='scroll'
              >

                {config.stickers.map((sticker) => (

                  <Text
                    onClick={() => {
                        //console.log('[DENTRO DO COMPONENTE] Clicou no sticker!', sticker)
                        if(Boolean(prop.onStickerClick)){
                        
                          prop.onStickerClick(sticker)
                        
                        }
                    }}
                    tag="li" key={sticker}
                    styleSheet={{
                      width: '50%',
                      borderRadius: '0.313rem',
                      padding: '0.625rem',
                      focus: {
                        backgroundColor: config.theme.colors.neutrals[600],
                      },
                      hover: {
                        backgroundColor: config.theme.colors.neutrals[200],
                      }
                    }}
                  >

                    <Image src={sticker} />

                  </Text>
                
                ))}

              </Box>

            </Box>

          )}

        </Box>
      )

};

export default Sendsticker;
