import React from 'react'
import styles from './Country.module.css'
import { FormControl, NativeSelect } from '@material-ui/core';

const Country = () => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value=''>Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default Country