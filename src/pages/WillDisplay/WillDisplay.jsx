import styles from "./willDisplay.module.css";
import { WILLFORM } from "../../navigation/CONSTANTS";
import { AppContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function WillDisplay() {
  const { willData } = useContext(AppContext);
  
  const date = new Date()
  

  return (
    
    <section className={styles.container}>
    {willData.willWritersName!==undefined?
      <section className={styles.will}>
      <h2>LAST WILL AND TESTEMENT OF</h2>
      <article>
          <h3>{willData.willWritersName}</h3>
          <p>
            I, {willData.willWritersName}, an adult residing at{" "}
            {willData.willWritersAddress}, being of sound mind, declare this to
            be my Last Will and Testament. I revoke all wills and codicils
            previously made by me.{" "}
          </p>
        </article>
        <article>
          <h3>ARTICLE I</h3>
          <p>
            I appoint {willData.representativeName} as my Personal
            Representative to administer this Will, and ask that he be permitted
            to serve without Court supervision and without posting bond. If{" "}
            {willData.representativeName} is unwilling or unable to serve, then
            I appoint {willData.repSubstitute} to serve as my Personal
            Representative, and ask that he be permitted to serve without Court
            supervision and without posting bond.
          </p>
        </article>
        <article>
        <h3>ARTICLE II</h3>
        <p>
            I direct my Personal Representative to pay out of my residuary
            estate all of the expenses of my last illness, administration
            expenses, all legally enforceable creditor claims, all Federal
            estate taxes, state inheritance taxes, and all other governmental
            charges imposed by reason of my death without seeking reimbursement
            from or charging any person for any part of the taxes and charges
            paid, and if necessary, reasonable funeral expenses, including the
            cost of any suitable marker for my grave, without the necessity of
            an order of court approving said expenses.
          </p>
        </article>
        <article>
          <h3>ARTICLE III</h3>
          {willData.dOPArray.map((item) => (
            <p>
              I devise, bequeth, and give {item.propertyPercentage} of{" "}
              {item.propertyName} to {item.beneficiary}
            </p>
          ))}
        </article>

        <article>
          <h3>ARTICLE IV</h3>
          <p>{willData.willConditional}</p>
        </article>
        <article>
          <h3>SELF-PROVING AFFIDAVIT</h3>
          <p>
          The instrument, consisting of this and two (2) typewritten pages was
          signed and acknowledged by Testator as his Last Will and Testament
            in our presence, and we, at his request, and in his presence, and in
            the presence of each other, have subscribed our names as witnesses.
            Under penalties for perjury, we, the undersigned Testator and
            witnesses declare: 1. That the Testator executed this instrument as
            his Will; 2. That in the presence of witnesses, the Testator signed
            or acknowledge his signature already made, or directed another to
            sign for him in his presence; 3. That the Testator executed the Will
            as his free and voluntary act for the purposes expressed in it; 4.
            That each of the witnesses, in the presence of the Testator and of
            each other, signed the Will as witness; 5. That the Testator was of
            sound mind; and 6. That, to the best of his knowledge, the Testator
            was at the time eighteen (18) or more years of age.
          </p>
          <p>All of which is attested to this on {date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()}</p>
        </article>
        <section>
          signature: {willData.ip}
          <p>{willData.willWritersName.toUpperCase()}, Testator</p>
          signature: <span>WillCreator</span>
          <p>WillCreator, Witness</p>
        </section>
      </section>:
      <p>No data provided. Go to will <Link to={WILLFORM}>form</Link></p>
      }
    </section>
  );
}
