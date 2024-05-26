import React from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../Hooks/UseForm'

import { Routes } from '../../routes'

import Headline from '../../components/Headline/Headline'
import Container from '../../components/Container/Container'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Checkbox from '../../components/Checkbox/Checkbox'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'

import { validation } from '../../utils/validation'
import { selectList } from '../../utils/language'

import './SingUp.scss'

const SingUp = () => {

    const handleSubmitForm = () => {
        console.log('send data: ', values)
    }

    const { handleInput, handleSubmit, values, errors, isValidate } = useForm(
        handleSubmitForm,
        validation
    )

    return (
        <main className="auth auth--registration">
            <Headline className="headline--auth" caption="Регистрация"/>
            <div className="auth__information">
                <span>Уже есть аккаунт?</span> <Link to={Routes.auth.singIn}>Войти</Link>
            </div>
            <Container className="container--auth">
                <Form className="form--registration" handleSubmit={handleSubmit}>
                    <Input
                        className="input--name"
                        label="Имя"
                        id="name"
                        name="name"
                        placeholder="Введите Ваше имя"
                        value={values.name}
                        error={errors.name}
                        disabled={false}
                        handleInput={handleInput}
                    />
                    <Input
                        className="input--email"
                        label="Еmail"
                        id="email"
                        name="email"
                        placeholder="Введите ваш email"
                        value={values.email}
                        error={errors.email}
                        disabled={false}
                        handleInput={handleInput}
                    />
                    <Input
                        className="input--phone"
                        label="Номер телефона"
                        id="phone"
                        name="phone"
                        placeholder="Введите номер телефона"
                        value={values.phone}
                        error={errors.phone}
                        disabled={false}
                        handleInput={handleInput}
                    />
                    <Select
                        className="select--auth"
                        label="Язык"
                        id="language"
                        name="language"
                        placeholder="Язык"
                        value={values.language}
                        error={errors.language}
                        list={selectList}
                        handleChange={handleInput}
                    />
                    <Checkbox
                        className="checkbox--auth"
                        label={<>Принимаю <Link to={Routes.privacy}>условия</Link> использования</>}
                        id="privacy"
                        name="privacy"
                        value={values.privacy}
                        error={errors.privacy}
                        handleChange={handleInput}
                    />
                    <Button
                        className="button--auth button--registration"
                        type="submit"
                        disabled={!isValidate}
                    >
                        Зарегистрироваться
                    </Button>
                </Form>
            </Container>
        </main>
    )
}

export default SingUp
