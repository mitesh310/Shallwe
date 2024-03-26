import React from 'react'

const Payment = () => {
    const handlepay = async () => {

        //api call for payment

        const paybody = {
            "merchant_id": "2104271",
            "language": "EN",
            "amount": "1",
            "currency": "INR",
            "redirect_url": "http://youdomain.com/payment-response.php",
            "cancel_url": "http://youdomain.com/payment-cancel.php",
            "billing_name": "Urvashi",
            "billing_address": "Room no 1101, near Railway station Ambad",
            "billing_state": "MP",
            "billing_zip": "425001",
            "billing_country": "India",
            "billing_tel": "9876543210",
            "billing_email": "test@gmail.com",
            "order_id":"1234"
        }
        const pay_res = await fetch('http://localhost/shallwe/payment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paybody),
        });
        console.log(pay_res)
        pay_res.json()
            .then(data => {
                console.log(data)
                var encryptedData = data.encryptData;
                console.log("started")

                var formBody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"> <input type="hidden" id="encRequest" name="encRequest" value="' + encryptedData + '"> <input type="hidden" name="access_code" id="access_code" value="AVKH23KB06BQ72HKQB"> <script language="javascript">document.redirect.submit();</script> </form>';
                document.body.innerHTML += formBody;
                document.redirect.submit();
                console.log("payment ended")

            })
            .catch((err) => {
                console.log("some error has occured in register", err)
            })

    }
    return (
        <>
            <div>Payment</div>
            <button style={{ padding: "33px 33px" }} onClick={handlepay}> pay now</button>
        </>
    )
}

export default Payment