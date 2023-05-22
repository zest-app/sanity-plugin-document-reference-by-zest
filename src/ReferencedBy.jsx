import {WithReferringDocuments} from 'sanity'
import {IntentButton, Preview, useSchema} from 'sanity'

const ReferencedBy = (props) => {
  const schema = useSchema()

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <WithReferringDocuments id={props.documentId}>
        {({referringDocuments, isLoading}) => {
          if (isLoading) {
            return <div>Looking for referring documents...</div>
          }

          if (!referringDocuments.length) return null

          return (
            <div style={styles.container}>
              <div style={styles.title}>
                Documents which reference this document ({referringDocuments.length})
              </div>
              {referringDocuments?.map((document) => {
                const obj = {
                  name: document.name,
                  updatedAt: new Date(document._updatedAt),
                  image: document.detailImage,
                }

                const schemaType = schema.get(document._type)
                const documentType =
                  document._type.charAt(0).toUpperCase() + document._type.slice(1)

                return (
                  <div key={document._id}>
                    {schemaType ? (
                      <IntentButton
                        intent="edit"
                        params={{id: document._id, type: document._type}}
                        style={styles.button}
                      >
                        <div style={styles.typeText}>{documentType}</div>
                        <Preview
                          value={document}
                          schemaType={schemaType}
                          style={styles.buttonText}
                        />
                      </IntentButton>
                    ) : (
                      <div>
                        A document of the unknown type <em>{document._type}</em>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        }}
      </WithReferringDocuments>
    </div>
  )
}

const styles = {
  container: {margin: '0px 40px', padding: '32px 20px'},
  title: {
    fontSize: '.8em',
    fontWeight: 'bold',
    color: '#272A2D',
    marginBottom: '12px',
  },
  button: {
    display: 'block',
    marginBottom: '0.5rem',
    backgroundColor: 'transparent',
    padding: '4px',
    boxShadow: 'none !important',
  },

  typeText: {
    color: '#272A2D',
    marginBottom: '0.5rem',
    fontWeight: '400',
    fontSize: '12px',
  },
  buttonText: {
    color: '#272A2D',
  },
}

const targetStyles = document.createElement('style')
targetStyles.innerText = `
  .jtFVaK {
    color: #272A2D !important;
  }
  a[data-ui="Button"]:hover,
  .customButton:hover {
    background-color: #f7f7f7 !important;
  }
  .kmZqBX {
    --card-border-color: #D9DCE3 !important;
  }
  .bXJFhW {
        --card-border-color: #D9DCE3 !important;

  }`
document.head.appendChild(targetStyles)

export default ReferencedBy
