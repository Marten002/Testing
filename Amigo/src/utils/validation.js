
export const nameMask = (value) => {
    return /^[A-ZА-ЯЁ\s-]+$/i.test(value)
}

export const emailMask = (value) => {
    return /^(([^<>()\[\]\\.,:!#$+*=_&^%|/`~±§\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

export const phoneMask = (value) => {
    return /^(?: *\+\ *)?\d{1}(?:\(\d{3}\)|\d{3})(?: *- *)?\d{3}(?: *- *)?\d{2}(?: *- *)?\d{2}$/.test(value)
}

export const validation = (values) => {
    let errors = {}

    const required = 'Обязательное поле'
    const invalid = 'Введено не корректное значение'

    // validate name
    if (!values.name) {
        errors.name = required
    } else if (!nameMask(values.name)) {
        errors.name = invalid
    }

    // validate email
    if (!values.email) {
        errors.email = required
    } else if (!emailMask(values.email)) {
        errors.email = invalid
    }

    // validate phone
    if (!values.phone) {
        errors.phone = required
    } else if (!phoneMask(values.phone)) {
        errors.phone = invalid
    }

    // validate privacy [checkbox]
    if (!values.privacy) {
        errors.privacy = required
    }

    // validate privacy [select]
    if (!values.language) {
        errors.language = required
    }

    return errors
}
