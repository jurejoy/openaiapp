//import React from 'react';
//import axios from 'axios';
import React, { useState } from 'react';
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';






export default function Openaiapp() {

  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const getOpenaiResponse = () => { openai.createCompletion({
    model: "text-davinci-003",
    prompt: inputText,
    max_tokens: 256,
    temperature: 0.7,
  }).then((response) => {
    console.log(response.data.choices[0].text)
    setResultText(response.data.choices[0].text)
  })
  };
    

  return (
        <div>
            <div className="app-header">
                <h2 className="header">OpenAI</h2>
            </div>

            <div className='app-body'>
                <div>
                    <Form>
                    <Form.Field
                      control={TextArea}
                      placeholder='Type Text to OpenAI..'
                      onChange={(e) => setInputText(e.target.value)}
                      />
                        <Button
                            color="blue"
                            size="large"
                            onClick={getOpenaiResponse}
                        >
                            <Icon name='openai' />
                            openai</Button>

                        <Form.Field
                            control={TextArea}
                            placeholder=''
                            value={resultText}
                        />

                    </Form>
                </div>
            </div>
        </div>
    )
}