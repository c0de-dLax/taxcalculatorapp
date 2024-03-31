import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

export default function ComputationExplanation() {
  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        border: "1px solid silver",
        borderRadius: "10px",
        padding: "10px 2px",
        backgroundColor: "white",
        fontFamily: "Heebo",
        margin: "115px auto 55px auto",
        maxWidth: 760,
        width: "95%",
        textAlign: "justify",
        lineHeight: 1.5,
        boxShadow: "0 8px 8px -4px rgb(182, 182, 164)",
        alignItems: "center",
        justifyContent: " center",
      }}
    >
      <header
        style={{
          position: "absolute",
          width: "85%",
          top: "-40px",
          textAlign: "center",
          color: "white",
          borderRadius: "10px",
          backgroundColor: "rgb(25,118,210)",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          padding: "16px",
          fontSize: "calc(15px + 2vw)",
          fontFamily: "Carter One",
          letterSpacing: "1px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
        }}
      >
        How did we get the results?
      </header>
      <div
        style={{
          padding: "30px calc(20px + 1.5vw)",
          fontFamily: "Heebo",
          margin: "24px auto 0 auto",
          maxWidth: "760px",
          textAlign: "justify",
          lineHeight: 1.5,
        }}
      >
        <p>
          To understand where we got these numbers, we need to get the basis for
          the computations that we did.
        </p>
        <p>
          To get the Income Tax, we need first to get the amount of
          income/salary that can be taxed from you. This will be your Taxable
          Income.
        </p>
        <p>
          To calculate your Taxable Income, we need to deduct your Monthly
          Contributions — SSS, PhilHealth, and Pag-IBIG — to your Monthly
          Income. We get these contributions from the assigned amount of
          respective government agencies.
        </p>
        <div className="divider"> SSS </div>
        <p>
          We can obtain the amount for your SSS from the SSS agency's
          Contribution Table.
          <br />
          <a
            href="https://www.sss.gov.ph/sss/DownloadContent?fileName=2023-Schedule-of-Contributions.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to see the SSS Contribution Table.
          </a>
          <br />
          <br />
          ► &nbsp;SSS = amount depending on the bracket range on the linked
          table
          <br />
          <i>Note: As an employee, only look at the "Total EE" column.</i>
        </p>
        <br />
        <div className="divider"> PhilHealth </div>
        <p>
          Next is the PhilHealth contribution. Your PhilHealth contribution is
          based on the table from the PhilHealth agency.&nbsp;
          <a
            href="https://www.philhealth.gov.ph/partners/employers/ContributionTable_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to see the PhilHealth Contribution Table.
          </a>
          <br />
          <br />
          ► &nbsp;PhilHealth = amount depending on the table
          <br />
          <i>
            Note: <br />
            • The 5% is split between the employer and employee so you only need
            to pay 2.5%. <br />• If your income is <span>&#8369;</span>10,000.00
            or below, you pay a fixed <span>&#8369;</span>500.00
            <br />• If your income is between <span>&#8369;</span>10,000.01 and{" "}
            <span>&#8369;</span>99,999.99, you contribute the 2.5% of your
            income.
            <br />• If your income is <span>&#8369;</span>100,000 or more, you
            pay a fixed amount of <span>&#8369;</span>5,000.00.
            <br />
          </i>
        </p>
        <div className="divider"> Pag-IBIG </div>
        <p>
          Next is your Pag-IBIG contribution. We can get the amount by referring
          to the computation table from the Pag-IBIG agency.&nbsp;
          <a
            href="https://www.pagibigfund.gov.ph/document/pdf/circulars/provident/HDMF%20Circular%20No.%20274%20-%20Revised%20Guidelines%20on%20Pag-IBIG%20Fund%20Membership.pdf#page=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to see the Pag-IBIG Computation Table.
          </a>
          <br />
          <br />
          ► &nbsp; Pag-IBIG = amount depending on the table
          <br />
          <i>
            Note:
            <br />• If your income is <span>&#8369;</span>1,500.00 or below, you
            only contribute 1% of your income.
            <br />• If your income is more than <span>&#8369;</span>1,500.00,
            you contribute 2% of your income.
            <br />• The maximum amount for this contribution is{" "}
            <span>&#8369;</span>100.00 and no more.
            <br />
          </i>
        </p>
        <div className="divider"> • ▼ • </div>
        <p>
          We then just add those three (3) contributions and we can get the
          Total Contributions.
          <br />
          <br />► &nbsp;Total Contributions = SSS + PhilHealth + Pag-IBIG
        </p>
        <div className="divider"> • ▼ • </div>
        <p>
          We then subtract the Total Contributions to the Monthly Income to get
          the amount of Taxable Income.
          <br />
          <br />► &nbsp; Taxable Income = Monthly Salary - Total Contributions
        </p>
        <p>
          Next is the Income Tax or the amount the BIR takes from you. From the
          most updated table — Revised Withholding Tax effective January 1, 2023
          and onwards. We need first to determine on what bracket or
          compensation level does your Taxable Income falls. By looking at the
          "Monthly" section we'll be able to easily identify on what computation
          we should conduct based from the row "Prescribed Withholding Tax".
          &nbsp;
          <a
            href="https://www.bir.gov.ph/index.php/tax-information/withholding-tax.html#wt10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to see the BIR Revised Withholding Tax Table.
          </a>
          <br />
        </p>
        <div className="divider">Sample Computation</div>
        But how do we conduct the right computations? To understand how to
        conduct it, let's set an income example of
        <span> &#8369;</span>45,000.00. First, we need to obtain the taxable
        income to have the right amount to use as basis for identifying the
        income bracket or compensation level and its appropriate computation for
        Prescribed Withholding Tax.
        <br />
        <br />
        From the given tables of SSS, PhilHealth, and Pag-IBIG, we'll obtain
        these values for an income of <span> &#8369;</span>45,000.00:
        <br />
        <br />► &nbsp; <b>SSS</b> = <span>&#8369;</span>1,350.00
        <br />► &nbsp; <b>PhilHealth</b> = <span>&#8369;</span>1,125.00
        <br />► &nbsp; <b>Pag-IBIG</b> = <span>&#8369;</span>100.00
        <br />
        <br />
        <div className="divider"> Total Contributions </div>
        Now, we get the total of these contributions:
        <table>
          <thead>
            <tr>
              <td>Total Contributions</td>
              <td>=</td>
              <td>SSS + PhilHealth + Pag-IBIG</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>1,350.00 + <span>&#8369;</span>1,125.00 +
                <span>&#8369;</span>100.00
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>2,575.00
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="divider"> Taxable Income </div>
        Then, we subtract the Total Contributions to the Monthly Income to get
        the Taxable Income:
        <table>
          <thead>
            <tr>
              <td>Taxable Income</td>
              <td>=</td>
              <td>Monthly Income - Total Contributions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>=</td>
              <td>
                <span>&#8369;</span>45,000.00 - <span>&#8369;</span>2,575.00
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>42,425.00
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="divider"> Income Tax </div>
        <p>
          So the amount that left that will be taxed from you is
          <span>&#8369;</span>42,425.00. Now we can check on what income bracket
          or compensation level this amount falls in the BIR's Revised
          Withholding Tax Table. Based on the table, it's between
          <span>&#8369;</span>33,333 - <span>&#8369;</span>66,666, so it's in
          the compensation level "3". The compution for the "Prescribed Minimum
          Withholding Tax" would be:
          <br />
          <br />
          Prescribed Withholding Tax = <span>&#8369;</span>1,875.00 + (20% over
          <span>&#8369;</span>33,333)
        </p>
        Before we move forward to our computation, let's understand the second
        part of our equation — the "20% over 33,333". It simply means, we get
        the 20% of what's left after getting the difference of your Taxable
        Income and <span>&#8369;</span>33,333. So in our example it would be:
        <br />
        <table>
          <thead>
            <tr>
              <td>
                20% over <span>&#8369;</span>33,333
              </td>
              <td>=</td>
              <td>
                20% x ( Taxable Income - <span>&#8369;</span>33,333 )
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>=</td>
              <td>
                20% x ( <span>&#8369;</span>42,425.00 - <span>&#8369;</span>
                33,333 )
              </td>
            </tr>
            <tr>
              <td />
              <td>=</td>
              <td>
                20% x <span>&#8369;</span>9,092.00
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>

              <td>
                <span>&#8369;</span>1,818.40
              </td>
            </tr>
          </tfoot>
        </table>
        Then, we insert the resulted value to our Income Tax or Prescribed
        Withholding Tax computation:
        <table>
          <thead>
            <tr>
              <td>Prescribed Withholding Tax</td>
              <td>=</td>
              <td>
                <span>&#8369;</span>1,875.00 + ( 20% over <span>&#8369;</span>
                33,333 )
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>1,875.00 + <span>&#8369;</span>1,818.40
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>3,693.40
              </td>
            </tr>
          </tfoot>
        </table>
        <p>
          So having a monthly income of <span>&#8369;</span>45,000.00 will have
          an Income Tax of <span>&#8369;</span>3,393.40!
        </p>
        Let's move further and complete the basis of our computations based on
        the given example above.
        <div className="divider"> Net Pay after Tax </div>
        To get the "Net Pay after Tax", we simply just:
        <table>
          <thead>
            <tr>
              <td>Net Pay after Tax</td>
              <td>=</td>
              <td>Monthly Income - Income Tax</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>45,000.00 - <span>&#8369;</span>3,693.40
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>41,306.60
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="divider"> Total Deductions </div>
        To get Total Deductions, we add the Income Tax and Total Contributions:
        <table>
          <thead>
            <tr>
              <td>Total Deductions</td>
              <td>=</td>
              <td>Income Tax + Total Contributions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>3,396.40 + <span>&#8369;</span>2,575.00
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>6,268.40
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="divider"> Net "Take Home" Pay</div>
        Lastly, to get what's left of your monthly income or your estimated Net
        "Take Home" Pay, we simply deduct the Total Contributions to your
        Monthly Income:
        <table>
          <thead>
            <tr>
              <td>Net "Take Home" Pay</td>
              <td>=</td>
              <td>Monthly Income - Total Deductions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>45,000.00 + <span>&#8369;</span>6,268.40
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>=</td>
              <td>
                <span>&#8369;</span>38,731.60
              </td>
            </tr>
          </tfoot>
        </table>
        <p>
          And there we have it! The estimated amount left for you after all the
          deductions is <span>&#8369;</span>38,731.60.
        </p>
        <p>
          Thank you for having the time to read all through that explanation! We
          hope we provided a good perspective on how we got the computation
          results we posted above.
        </p>
      </div>
      <IconButton
        id="endOfExplanationBtn"
        aria-label="Click here to scroll to top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          width: 34,
          height: 44,
          position: "absolute",
          bottom: 0,
          marginBottom: "-22px",
          left: "50%",
          marginLeft: -17,
          backgroundColor: "rgb(25,118,210)",
          border: "none",
          borderRadius: 6,
          color: "white",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KeyboardDoubleArrowUp />
        </Typography>
      </IconButton>
    </section>
  );
}
