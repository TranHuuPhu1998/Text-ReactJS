type TType = (a: string) => string;

type Messages = {
  
};

const validateMessagesCommon = (t: TType): Messages => {
  return {
    required: '${label}' + ` ${t('is required!')}`,
    whitespace: '${label}' + ` ${t('cannot be empty')}`,
    types: {
      email: '${label}' + ` ${t('is not a valid!')}`,
    },
  }
}

const setTitleDocument = (title:string) => {
  document.title = title
}

export {
  validateMessagesCommon,
  setTitleDocument
};
