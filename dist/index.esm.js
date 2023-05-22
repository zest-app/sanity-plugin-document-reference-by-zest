import { jsx, jsxs } from 'react/jsx-runtime';
import { useSchema, WithReferringDocuments, IntentButton, Preview } from 'sanity';
const ReferencedBy = props => {
  const schema = useSchema();
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    /* @__PURE__ */
    jsx("div", {
      children: /* @__PURE__ */jsx(WithReferringDocuments, {
        id: props.documentId,
        children: _ref => {
          let {
            referringDocuments,
            isLoading
          } = _ref;
          if (isLoading) {
            return /* @__PURE__ */jsx("div", {
              children: "Looking for referring documents..."
            });
          }
          if (!referringDocuments.length) return null;
          return /* @__PURE__ */jsxs("div", {
            style: styles.container,
            children: [/* @__PURE__ */jsxs("div", {
              style: styles.title,
              children: ["Documents which reference this document (", referringDocuments.length, ")"]
            }), referringDocuments == null ? void 0 : referringDocuments.map(document2 => {
              const schemaType = schema.get(document2._type);
              const documentType = document2._type.charAt(0).toUpperCase() + document2._type.slice(1);
              return /* @__PURE__ */jsx("div", {
                children: schemaType ? /* @__PURE__ */jsxs(IntentButton, {
                  intent: "edit",
                  params: {
                    id: document2._id,
                    type: document2._type
                  },
                  style: styles.button,
                  children: [/* @__PURE__ */jsx("div", {
                    style: styles.typeText,
                    children: documentType
                  }), /* @__PURE__ */jsx(Preview, {
                    value: document2,
                    schemaType,
                    style: styles.buttonText
                  })]
                }) : /* @__PURE__ */jsxs("div", {
                  children: ["A document of the unknown type ", /* @__PURE__ */jsx("em", {
                    children: document2._type
                  })]
                })
              }, document2._id);
            })]
          });
        }
      })
    })
  );
};
const styles = {
  container: {
    margin: "0px 40px",
    padding: "32px 20px"
  },
  title: {
    fontSize: ".8em",
    fontWeight: "bold",
    color: "#272A2D",
    marginBottom: "12px"
  },
  button: {
    display: "block",
    marginBottom: "0.5rem",
    backgroundColor: "transparent",
    padding: "4px",
    boxShadow: "none !important"
  },
  typeText: {
    color: "#272A2D",
    marginBottom: "0.5rem",
    fontWeight: "400",
    fontSize: "12px"
  },
  buttonText: {
    color: "#272A2D"
  }
};
const targetStyles = document.createElement("style");
targetStyles.innerText = "\n  .jtFVaK {\n    color: #272A2D !important;\n  }\n  a[data-ui=\"Button\"]:hover,\n  .customButton:hover {\n    background-color: #f7f7f7 !important;\n  }\n  .kmZqBX {\n    --card-border-color: #D9DCE3 !important;\n  }\n  .bXJFhW {\n        --card-border-color: #D9DCE3 !important;\n\n  }";
document.head.appendChild(targetStyles);
export { ReferencedBy };
//# sourceMappingURL=index.esm.js.map
