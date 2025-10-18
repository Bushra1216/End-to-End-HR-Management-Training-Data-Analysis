# HR Management Training Effectiveness & Performance Evaluation  
_Analyzing training performance, budget efficiency, and ROI to help HR leadership make informed decisions._


---

## Overview


This project evaluates employee performance improvement following training, analyzes spending efficiency, identifies most effective training programs along with opportunities to maximize both training outcomes and cost effectiveness. The analysis is based on **AdventureTech’s** HR training initiatives conducted between **May 2022 and August 2023**. The provided training data includes key fields such as **Employee ID**, **training date**, **training duration**, **training costs**, **budgets**, **training types**, **training outcome**, **training programs**, **trainer name**, **feedback scores**, **pre-test scores**, **post-test scores**, and **certification status**. 

<br>


<h2><a class="anchor" id="ask1"></a>Ask</h2>

- Are training programs improving employee performance?
- Are we spending wisely, or is the budget wasted?
- Identify which training programs delivered the best ROI?
- Which trainer delivered the most effective training?
- Where can improvements be made?



<br>



<h2><a class="anchor" id="set_goal"></a>Goal</h2>

<p>The aim of this project is to help HR leadership to evaluate whether training programs are improving employee performance, ensure efficient use of investments and identify opportunities to maximize both training outcomes and cost effectiveness. </p>


<br>



<h2><a class="anchor" id="exs"></a>Executive Summary</h2>

**From May 10, 2022, to August 3, 2023, the company conducted seven training programs involving approximately 145 employees, with the highest participation in May. Most employees joined in Project Management training. Employees showed higher participation in Internal training (over 80%) compared to External training programs. Total cost across overall period was approximately $95k, and spending decreased by 30.76% in 2023.**




<br>


<h2><a class="anchor" id="kf"></a>Key Findings</h2>

- Budget Utilization: Almost 98.7% of total allocated budget has been utilized effectively
- Savings: 1.3% of the budget remained unspent, reflecting prudent cost control, not waste
- Internal vs. External Cost Split: Internal Training Cost = 65K, External Cost = 30K
- Performance Growth: Overall employee performance improved across all programs — with an average growth of 36%
- Top Trainings: Communication Skills, Customer Service delivered the best Return On Investment and based on post-test score employees improved 37% in Project Management 
- Best Budget Efficiency: Leadership Development (lowest cost per employee ~$508)
- Top Perfroming Trainers: Maek Paul and John Dawson — received average feedback scores of 4.5
- Employee Participation Concern: Participation drop 14.10% in 2023
- Overspending Alert: Database Administration exceeded its budget slightly (+7.7%)
- Training Impact: Improved post-test performance across all programs


<br>


<h2><a class="anchor" id="drb"></a>Dashboard</h2>

<h3><a class="anchor" id="wto"></a>Workforce Training Overview</h3>
<br> <img width="1348" height="933" alt="Image" src="https://github.com/user-attachments/assets/a29d5fe1-1804-45f3-ae7f-81aaec71d6c5" /> <br><br>

Most employees received training in Project Management. Employees showed higher participation in Internal training (over 80%) compared to external training programs.
<br>


<h3><a class="anchor" id="pa"></a>Performance Analysis</h3>
<br><img width="1448" height="953" alt="Image" src="https://github.com/user-attachments/assets/a1fc5d18-55d6-464c-a1cb-79bd351fd278" /> <br><br>




Across all training programs, employees demonstrated measurable improvement. Overall, 22% employee successfully passed the training and received a certificate. And the remaining 78%, who are denoted as "Not Passed' are not all the same; among them, 30% completed the training (some of them got certificates), 25% are in ongoing training, and 23% failed. Employees made the most progress in **Customer Service** and **Communication Skills** program. Though, employees are more engaged in **Project Management**(year-long training as well). Here, their performance improved by 37%. In **Excel – Basic To Advanced**, participants showed the lowest improvement at 27%. While employees provided an average feedback score of 4.3 for this training, similar to other programs like Technical Skills and Project Management, suggesting a need to review the duration and trainer effectiveness. <br>

Strongest improvements observed (Pre-Test Score vs. Post-Test Score):
-	Customer Service (+23pp)
-	Communication Skills (+21pp)
-	Technical Skills (+20pp)<br>
<p>Even in Project Management and Database Administration, employees showed significant improvement.<a href="https://github.com/Bushra1216/End-to-End-HR-Management-Training-Data-Analysis/blob/main/HR_Report.pdf"> Read more</a></p>



<br>


<h3><a class="anchor" id="pa"></a>Training Investment and Cost Efficiency</h3>
<br> <img width="1430" height="970" alt="Image" src="https://github.com/user-attachments/assets/64094162-1a2b-4d91-85c4-6ad06b0f89c4" /><br><br>
<p>May recorded the highest cost of $15.7K and longest duration (63 days). Because the Database Administration program, which was particularly expensive and running for 11 days in May, cost $7.5K, plus the Technical Skills training conducted for 25 days that month at $4.3K.</p>

<br> <img width="1430" height="970" alt="Image" src="https://github.com/user-attachments/assets/c4cea5db-a162-4600-9879-97cc5bc131c7" /><br><br>
<p>
As an external program, Database Administration slightly 7.76% over of its allocated budget. On the other hand, the Project Management—an ongoing, year-long program—remained within its budget of 19K. In contrast, internal programs were more cost-effective, collectively totaling around 65K compared to 30K for external programs.<a href="https://github.com/Bushra1216/End-to-End-HR-Management-Training-Data-Analysis/blob/main/HR_Report.pdf"> Read more</a>
</p>


<br>
<br>

<h2><a class="anchor" id="pa"></a>Extended Analysis: Cost, Duration and Program Performance Efficiency</h2>
<p>Performed Correlation and ROI-based performance analysis to evaluate performance growth, training cost, training duration, and budget utilization across all training programs, including the Efficiency Ratio to highlight programs that achieved the best balance between impact and budget control.</p> <br>





 | **Training Program** | **Cost**    | **ROI per $1000**  | **Budget_Used%** | **Efficiency_Ratio** |
|-------------------|-----------------|----------------|-------------|------------|
| Communication Skills     | 9330  | 4.5%          | 95.67%       | 0.0047           |
| Customer Service         | 13185 | 3.3%          | 97.61%       | 0.0033           |
| Database Administration  | 18600 | 1.9%          | 107.76%      | 0.0018           |
| Excel - Basic to Advance | 11446 | 2.4%          | 98%          | 0.0024           |
| Leadership Development   | 8134  | 3.8%          | 95.3%        | 0.004            |
| Project Management       | 18229 | 2%            | 96.11%       | 0.0021           |
| Technical Skills         | 16144 | 2.2%          | 97.3%        | 0.0023           |

<br>

<h4><a class="anchor" id="ca"></a>Correlation Analysis</h4>

- Between cost & performance growth: Pearson r =  0.1491, P-value: 0.75 [There is no statistically significant relationship between cost and performance growth.
It indicates that higher spending does not always guarantee better outcomes]
- Between training duration & performance growth: Pearson r = 0.1908, P-value: 0.68 [No significant relationship between training days and performance growth.]

**Interpretation**
Both correlation shows no significant relationship between them. It indicates, higher cost or longer duration did not reliably produce greater performance improvement. Focus on what is delivered, trainer's effectiveness, content quality
