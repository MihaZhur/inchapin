'use client'
import { Typography } from "@/shared/ui/typography"
import { Input } from '@/shared/ui/input'
import { MaskInput } from "@/shared/ui/mask-input";

import { Button } from "@/shared/ui/button"
import styles from './form-order.module.scss';
import Link from "next/link";
import { FormValues, useFormOrder } from "../model/use-form-order";
interface Props {
    onSudmitSuccess?: (values: FormValues) => void
}
export const FormOrder: React.FC<Props> = ({ onSudmitSuccess }) => {

    // Сделал базовый UX валидации, ручками долго будет все писать, взял бы формикс или реактхукформ + zod,yup
    const { getFieldProps, handleSubmit, submitting } = useFormOrder(onSudmitSuccess)

    return <form autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.form__wrap}>
            <Typography className={styles.form__title} uppercase>
                Заказать звонок
            </Typography>
            <div className={styles.form__fields}>
                <div className={styles.form__inputWrap}>
                    <Input autoComplete="new-password" id="name" label="Ваше имя" type="text" {...getFieldProps('name')} />
                </div>
                <div className={styles.form__inputWrap}>
                    <MaskInput
                        id="phone"
                        label="Телефон"
                        mask="+7 (___) ___-__-__"
                        replacement={{ _: /\d/ }}
                        type="tel"
                        {...getFieldProps('phone')}
                        autoComplete="new-password"
                    />
                </div>
                <div className={styles.form__inputWrap}>
                    <Input id="email" autoComplete="new-password" label="Email" type="email" {...getFieldProps('email')} />
                </div>
            </div>
            <Typography className={styles.form__text}>
                Нажимая на кнопку «Отправить», вы ознакомлены <br /> и&nbsp;подтверждаете согласие&nbsp;с&nbsp;<Link href="#"> политикой обработки персональных&nbsp;данных</Link>
            </Typography>
            <div className={styles.form__blockSubmit}>

                <Button className={styles.form__buttonSubmit} type="submit" disabled={submitting}>
                    {submitting ? 'Отправка...' : 'Отправить'}
                </Button>
            </div>
        </div>
    </form>
}