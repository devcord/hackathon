const crypto = require('crypto')

const encrypt = (string, key) => {
    const salt = crypto.randomBytes(16)
    const iv = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv(
        'aes-256-cbc', 
        crypto.pbkdf2Sync(key, salt, 100000, 32, 'sha512'),
        iv
    )
    
    const encrypted = Buffer.concat([
        cipher.update(string), 
        cipher.final()
    ])

    return {
        ciphertext: `${ iv.toString('hex') }:${ encrypted.toString('hex') }`,
        salt: salt.toString('hex')
    }
}

const decrypt = (string, key, salt) => {
    string = string.split(':')

    const decipher = crypto.createDecipheriv(
        'aes-256-cbc', 
        crypto.pbkdf2Sync(key, Buffer.from(salt, 'hex'), 100000, 32, 'sha512'), 
        Buffer.from(
            string.shift(), 
            'hex'
        )
    )

    return Buffer.concat([
        decipher.update(Buffer.from(
            string.join(':'), 
            'hex'
        )), 
        decipher.final()
    ]).toString()
}

module.exports = {
    decrypt, 
    encrypt
}
