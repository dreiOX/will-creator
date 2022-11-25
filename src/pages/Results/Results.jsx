import styles from "./results.module.css";

export default function Results() {
  return (
    <section className={styles.container}>
      <section className={styles.will}>
        <h2>LAST WILL AND TESTEMENT OF</h2>
        <article>
          <h3>John Smith</h3>
          <p>
            I, John Smith, an adult residing at 5 Cherry Lane, New York, New
            York, being of sound mind, declare this to be my Last Will and
            Testament. I revoke all wills and codicils previously made by me.{" "}
          </p>
        </article>
        <article>
          <h3>ARTICLE I</h3>
          <p>
            I appoint Barry Feinstein as my Personal Representative to
            administer this Will, and ask that he be permitted to serve without
            Court supervision and without posting bond. If Barry Feinstein is
            unwilling or unable to serve, then I appoint Charles Reid to serve
            as my Personal Representative, and ask that he be permitted to serve
            without Court supervision and without posting bond.
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
          <p>
            I devise, bequeath, and give my baseball card collection to my son,
            James Smith. I devise, bequeath, and give my books and bookshelves
            to my sister, Samantha Jones. I devise, bequeath, and give my
            jewelry to my wife, Nancy Smith.
          </p>
        </article>
        <article>
          <h3>ARTICLE IV</h3>
          <p>
            I devise, bequeath, and give my baseball card collection to my son,
            James Smith. I devise, bequeath, and give my books and bookshelves
            to my sister, Samantha Jones. I devise, bequeath, and give my
            jewelry to my wife, Nancy Smith.
          </p>
        </article>
        <article>
          <h3>ARTICLE V</h3>
          <p>
            Should any beneficiary not survive me by 30 days, his or her share
            shall be distributed to his or her then surviving children in equal
            shares.
          </p>
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
          <p>All of which is attested to this 20th day of February 2013</p>
        </article>
        <section>
          (Signature)
          <p>JOHN SMITH, Testator</p>
          (Signature)
          <p>Witness</p>
        </section>
      </section>
    </section>
  );
}
