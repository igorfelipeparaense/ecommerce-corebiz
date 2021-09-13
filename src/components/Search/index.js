import React, { useRef, useState, useCallback } from 'react';
import { Form } from "@unform/web";
import * as Yup from 'yup';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from 'components/Input';
import { Container, Button } from './styles';

const Search = () => {
    const formRef = useRef(null),
        [load, setLoad] = useState(false);

    const handleSubmit = useCallback(async (data, { reset }) => {
        setLoad(true);
        try {
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                contextSearch: Yup.string().required(''),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            setLoad(false)

        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
            setLoad(false)
        }

    }, [])


    return <Form ref={formRef} onSubmit={handleSubmit} className="container-form">
        <Container >
            <Input {...{
                name: "contextSearch",
                placeholder: "O que está procurando?",
                borderRadius: "7px 0px 0px 7px",
                width: '500px'
            }} />
            <Button type="submit" >{load ? 'Loading...' : <AiOutlineSearch />}</Button>
        </Container>
    </Form>
        ;
}

export default Search;