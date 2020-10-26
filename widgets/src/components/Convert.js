import React, { useState, useEffect } from 'react';
import { googleTranslateApi } from '../api/googleTranslate';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  //if don't typing more then 3 sec in input, will be change debouncedText
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 3000);

    //clean up function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  //when change debouncedText -> send request to API with text and get result translated
  useEffect(() => {
    const doTranslation = async () => {
      const result = await googleTranslateApi.getTextTranslated(
        language.value,
        debouncedText
      );
      setTranslated(result.data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
