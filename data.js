// ══════════════════════════════════════════
// DSP MUN — data.js
// All static curriculum data
// ══════════════════════════════════════════

const LESSONS = {
  1: [
    { title:'International Diplomacy', type:'Teach', targets:['I can describe the course goals and simulation process.','I can explain the role of diplomacy and negotiation in managing international relations.'], vocab:['Diplomacy','Negotiation','Multilateral','Stakeholders','National Interests','Committee','Resolutions','Parliamentary Procedure','Simulate','Delegate','Compromise'] },
    { title:'UN History', type:'Teach', targets:['I can explain the historical context for the creation of the United Nations.','I can identify key milestones in the history of the United Nations.'], vocab:['League of Nations','World War II','Treaty of Versailles','Collective Security','Appeasement','Atlantic Charter (1941)','Dumbarton Oaks (1944)','San Francisco (1945)','Precursor'] },
    { title:'UN Goals', type:'Teach', targets:['I can list the main objectives outlined in the United Nations Charter.','I can explain the core principles that guide the actions of the United Nations.'], vocab:['Charter','Sovereignty','International Law','Self-Determination','Human Rights','Peacekeeping','Non-intervention'] },
    { title:'UN Structure', type:'Teach', targets:['I can identify the six main organs of the United Nations.','I can describe the primary function of the General Assembly and the Security Council.'], vocab:['General Assembly (GA)','Security Council (SC)','ECOSOC','Trusteeship Council','International Court of Justice (ICJ)','UN Secretariat'] },
    { title:'UN Agencies', type:'Teach', targets:['I can identify and describe key UN specialised agencies.','I can connect UN agencies to current major global issues around the world.'], vocab:['WHO','UNESCO','UNICEF','UNHCR','WFP','ILO','IMF','World Bank'] },
    { title:'Assessment', type:'Assess', targets:['Short essay: How is the structure of the UN designed to promote diplomacy, negotiation, and multilateral cooperation?'], vocab:[] },
    { title:'Flex', type:'Flex', targets:['Flexible session for extension, review, or catch-up.'], vocab:[] },
  ],
  2: [
    { title:'Role of a Delegate', type:'Teach', targets:['I can describe the basic function of a delegate and a committee within the Model UN simulation.','I can explain why accurately representing an assigned country\'s official policy is crucial for effective participation.'], vocab:['Delegate','GA 1st – DISEC','GA 3rd – SOCHUM','UNSC','HRC','Committee'] },
    { title:'Analysing Exemplars', type:'Teach', targets:['I can analyse strong position papers to identify common structures, features, and criteria for success.','I can develop focused research questions that will help me understand the global issue and my country\'s perspective.'], vocab:['Compelling Questions','Supporting Questions'] },
    { title:'Evaluating Sources', type:'Teach', targets:['I can identify different types of reliable sources for my research.','I can evaluate the sources I find for credibility, relevance, and potential bias.'], vocab:['Primary Sources','Secondary Sources','UN ODS','NGO Reports','Government Websites','Credibility','Bias','Relevance'] },
    { title:'Background Research', type:'Research', targets:['I can find information to clearly define the assigned global issue and explain its current importance in the world.','I can gather key facts, statistics, and examples to illustrate the real-world impact of this issue.'], vocab:['Definition of Issue','Scope of Issue','Stakeholders'] },
    { title:'Background Draft', type:'Draft', targets:['I can write a clear and informative "Background" section for my position paper.','I can use my research to explain the context and significance of the global issue in my own words.'], vocab:[] },
    { title:'Past Actions Research', type:'Research', targets:['I can find information about previous efforts undertaken by the UN and other international bodies to address the issue.','I can identify the main outcomes or impacts of these past international efforts.'], vocab:['UN Resolutions','International Treaties','Regional Organisations'] },
    { title:'Past Actions Draft', type:'Draft', targets:['I can write a clear and informative "Past International Actions" section for my position paper.','I can summarise past international responses to the issue, citing key documents or initiatives.'], vocab:[] },
    { title:'National Policy Research', type:'Research', targets:['I can find information detailing my country\'s stance, policies, and past actions regarding the global issue.','I can research my country\'s foreign policy goals and national interests that shape its position on this issue.'], vocab:['UN Voting Records','Blocs/Alliances','Historical Context','Economic Interests','Security Interests','Cultural Values'] },
    { title:'National Policy Draft', type:'Draft', targets:['I can write an accurate "Country Policy" section for my position paper.','I can clearly articulate my assigned country\'s unique perspective, policies, and actions related to the issue.'], vocab:[] },
    { title:'Recommendations Draft', type:'Draft', targets:['I can develop specific, actionable, and creative solutions to the global issue that are consistent with my country\'s policy and the committee\'s powers.','I can write a persuasive "Possible Solutions" section outlining my country\'s recommendations for future action.'], vocab:['Innovative','Incremental'] },
    { title:'Editing & Revising', type:'Practice', targets:['I can review my complete position paper for clarity, accuracy, logical flow, and consistent representation of my country\'s policy.','I can revise my position paper to improve its quality based on formatting guidelines, success criteria, and feedback.'], vocab:[] },
    { title:'Elevator Pitch', type:'Practice', targets:['I can prepare a brief and engaging oral summary of my country\'s position as outlined in my paper.','I can confidently deliver my oral summary, highlighting the most important aspects of my country\'s stance and proposed solutions.'], vocab:['Talking Points','Call to Action','Pace','Volume','Eye contact','Posture'] },
    { title:'Flex', type:'Flex', targets:['Flexible session for extension, review, or catch-up.'], vocab:[] },
    { title:'Flex', type:'Flex', targets:['Flexible session for extension, review, or catch-up.'], vocab:[] },
  ],
  3: [
    { title:'Opening & Speakers List', type:'Teach', targets:['I can identify key roles in a committee and explain basic rules of decorum.','I can explain how the Speaker\'s List functions and identify basic Points.'], vocab:['Dais/Chair','Placard','Decorum','Speakers List','Point of Order','Point of Privilege'] },
    { title:'Opening Speeches', type:'Practice', targets:['I can deliver an Opening Speech that outlines my country\'s position within the set time limits.','I can practise getting recognised to speak from the Speaker\'s List and correctly raise basic Points during committee proceedings.'], vocab:['Yielding the Floor'] },
    { title:'Caucusing — Theory', type:'Teach', targets:['I can describe the purpose and typical activities for both moderated and unmoderated caucuses.','I can explain the relevant motions used to propose and manage caucuses.'], vocab:['Moderated Caucus','Unmoderated Caucus','Rules of Procedure'] },
    { title:'Moderated Caucusing', type:'Practice', targets:['I can make formal motions to start and manage different types of caucuses.','I can actively participate in initial caucuses to identify potential allies, share ideas, and begin discussing solutions.'], vocab:[] },
    { title:'Resolutions — Theory', type:'Teach', targets:['I can distinguish between preambulatory clauses and operative clauses in a draft resolution.','I can identify the correct formatting for a resolution and recognise common action verbs used in operative clauses.'], vocab:['Working Paper','Preambulatory Clauses','Operative Clauses','Opening Verbs'] },
    { title:'Unmoderated Caucusing', type:'Practice', targets:['I can collaborate with other delegates in my bloc or working group to begin drafting specific resolution clauses.','I can apply correct formatting and appropriate diplomatic language when writing my resolution.'], vocab:['Bloc Formation','Lobbying','Consensus'] },
    { title:'Drafting Resolutions', type:'Practice', targets:['I can continue to work with my bloc to develop our ideas into a more complete draft resolution.','I can help refine the wording of our clauses to ensure they are clear, impactful, and accurately reflect our policy alignment.'], vocab:[] },
    { title:'Introducing Resolutions — Theory', type:'Teach', targets:['I can explain the difference between sponsors and signatories of a draft resolution.','I can understand the procedure for formally submitting and introducing a draft resolution.'], vocab:['Sponsors','Signatories','Points of Information'] },
    { title:'Introducing Resolutions', type:'Practice', targets:['I can formally present and introduce my draft resolution with my group.','I can clearly answer Points of Information about our draft resolution and ask insightful questions about others.'], vocab:[] },
    { title:'Debating & Amending — Theory', type:'Teach', targets:['I can define what an amendment is and distinguish between friendly and unfriendly amendments.','I can explain the formal procedures for writing, proposing, and debating amendments to a resolution.'], vocab:['Amendment','Friendly Amendments','Unfriendly Amendments','Proposing Amendments'] },
    { title:'Debating & Amending', type:'Practice', targets:['I can actively participate in the debate on draft resolutions by making statements and asking questions.','I can practise proposing correctly formatted amendments that reflect my country\'s policy.'], vocab:['Strategic Amendments'] },
    { title:'Debating Amendments', type:'Practice', targets:['I can practise debating the substance and potential impacts of proposed amendments.','I can participate correctly in the committee\'s voting procedures for different types of amendments.'], vocab:[] },
    { title:'Voting — Theory', type:'Teach', targets:['I can explain the different motions used to manage the formal voting procedure on draft resolutions.','I can explain the correct order for voting and the implications of different voting outcomes.'], vocab:['Closure of Debate','Adjournment of Debate','Roll Call Vote','Abstain','Adoption','Adjournment'] },
    { title:'Voting — Practice', type:'Practice', targets:['I can participate in the formal voting procedure for a final amendment and then for a complete resolution.','I can follow correct procedural rules and use appropriate voting options thoughtfully during the voting process.'], vocab:[] },
    { title:'Final Debrief & Reflection', type:'Assess', targets:['I can reflect on the committee simulation process, discuss outcomes, and share what I learned.','I can identify key MUN skills I developed or improved and consider how they apply in other situations.'], vocab:[] },
    { title:'Flex', type:'Flex', targets:['Flexible session for extension, review, or catch-up.'], vocab:[] },
    { title:'Flex', type:'Flex', targets:['Flexible session for extension, review, or catch-up.'], vocab:[] },
  ]
};

const TIMELINE_DATA = [
  { year:'1914–18', event:'World War I', desc:'The war that "ended all wars" — instead triggering the conditions for the next one. 20 million dead.' },
  { year:'1919', event:'Treaty of Versailles', desc:'Ended WWI but imposed punishing terms on Germany. Created the League of Nations — the first attempt at collective security.' },
  { year:'1920', event:'League of Nations founded', desc:'The first intergovernmental organisation dedicated to maintaining peace. The US never joined. The League failed to prevent WWII.' },
  { year:'1939–45', event:'World War II', desc:'60–80 million dead. The Holocaust. The failure of the League made clear that a stronger institution was needed.' },
  { year:'1941', event:'Atlantic Charter', desc:'Roosevelt and Churchill set out war aims and principles for a post-war world order. Laid the conceptual groundwork for the UN.' },
  { year:'1944', event:'Dumbarton Oaks Conference', desc:'Allied powers agreed on the framework for the United Nations — including the Security Council structure and veto power.' },
  { year:'1945', event:'San Francisco Conference', desc:'50 nations signed the UN Charter on 26 June 1945. The UN officially came into existence on 24 October 1945.' },
  { year:'1948', event:'Universal Declaration of Human Rights', desc:'Eleanor Roosevelt chaired the drafting committee. The UDHR established the foundational language of international human rights.' },
  { year:'1960s–70s', event:'Decolonisation', desc:'UN membership expanded dramatically as former colonies gained independence. The character and concerns of the UN shifted fundamentally.' },
  { year:'1991', event:'Post-Cold War', desc:'The end of the Cold War unfroze the Security Council, enabling more active peacekeeping — but also creating new controversies.' },
  { year:'2000', event:'Millennium Development Goals', desc:'189 nations committed to eight goals addressing poverty, disease, education, and equality — the precursor to the Sustainable Development Goals.' },
  { year:'2015', event:'Sustainable Development Goals', desc:'The 2030 Agenda for Sustainable Development — 17 goals, 169 targets. The current framework for global cooperation on development.' },
];

const UN_ORGANS = [
  { abbr:'GA', name:'General Assembly', desc:'The deliberative body of the UN. All 193 member states are represented with one vote each. Passes resolutions on a wide range of issues.', role:'Considers peace and security, economic development, budget, and admission of new members. Resolutions are non-binding but politically significant.', note:'One country, one vote' },
  { abbr:'SC', name:'Security Council', desc:'The UN\'s most powerful body. Has 5 permanent members (China, France, Russia, UK, USA) with veto power, and 10 elected non-permanent members.', role:'Primary responsibility for international peace and security. Can pass binding resolutions, authorise peacekeeping, and impose sanctions.', note:'P5 veto power' },
  { abbr:'ECOSOC', name:'Economic & Social Council', desc:'Coordinates the UN\'s economic, social, cultural, educational, health, and related work. Oversees many specialised agencies.', role:'Promotes higher standards of living, full employment, economic and social progress, and respect for human rights.', note:'54 elected members' },
  { abbr:'TC', name:'Trusteeship Council', desc:'Established to supervise the administration of Trust Territories and help them achieve self-governance or independence.', role:'Successfully oversaw the transition of all 11 Trust Territories to self-governance. Suspended operations in 1994 after its mandate was fulfilled.', note:'Now largely inactive' },
  { abbr:'ICJ', name:'International Court of Justice', desc:'The principal judicial organ of the UN. Settles legal disputes between states and gives advisory opinions on legal questions.', role:'Settles disputes submitted by states. Advisory opinions are not legally binding but carry significant authority. Located in The Hague.', note:'15 judges, 9-year terms' },
  { abbr:'Secretariat', name:'UN Secretariat', desc:'The administrative arm of the UN, headed by the Secretary-General. Implements decisions made by other organs and manages daily operations.', role:'Carries out the day-to-day work of the UN. Prepares reports, organises conferences, and supports peacekeeping missions.', note:'Secretary-General: 5-year term' },
];

const UN_PRINCIPLES = [
  { abbr:'Art. 2.1', name:'Sovereign Equality', desc:'All member states are equal under international law, regardless of size, wealth, or power.', role:'No state\'s sovereignty is superior to another\'s. This is why every nation has one vote in the General Assembly.', note:'Foundation of the system' },
  { abbr:'Art. 2.3', name:'Peaceful Settlement', desc:'Member states must settle their disputes through peaceful means — negotiation, mediation, arbitration, or the ICJ.', role:'States are obligated to seek peaceful resolution before resorting to any form of force.', note:'Prohibition on force' },
  { abbr:'Art. 2.4', name:'Non-Use of Force', desc:'Member states shall refrain from the threat or use of force against any other state\'s territorial integrity or political independence.', role:'One of the most important innovations of the post-WWII order. Exceptions exist for self-defence (Art. 51) and SC-authorised actions.', note:'Key post-1945 norm' },
  { abbr:'Art. 2.7', name:'Non-Intervention', desc:'The UN shall not intervene in matters within the domestic jurisdiction of any state.', role:'Limits the UN\'s authority over internal affairs — in tension with human rights obligations and R2P doctrine.', note:'Tension with human rights' },
  { abbr:'Art. 1.2', name:'Self-Determination', desc:'The right of peoples to freely determine their own political status and choose their form of government.', role:'Drove decolonisation in the 1950s–70s. Still contested in disputes over independence movements and minority rights.', note:'Contested in practice' },
  { abbr:'Art. 1.3', name:'Human Rights', desc:'The UN shall promote and encourage respect for human rights and fundamental freedoms without discrimination.', role:'Basis for the UDHR (1948), the Human Rights Council, treaty monitoring bodies, and humanitarian intervention arguments.', note:'UDHR, 1948' },
];

const COMMITTEES = [
  { abbr:'DISEC', name:'Disarmament & International Security', desc:'GA First Committee. Handles disarmament, global challenges, and threats to international peace and security.', focus:'Arms control, non-proliferation, peacekeeping mandates' },
  { abbr:'ECOFIN', name:'Economic & Financial Committee', desc:'GA Second Committee. Deals with international economic and financial matters and development.', focus:'Sustainable development, trade, climate finance' },
  { abbr:'SOCHUM', name:'Social, Humanitarian & Cultural', desc:'GA Third Committee. Handles social development, human rights, and humanitarian issues.', focus:'Human rights, refugees, gender equality, cultural rights' },
  { abbr:'SPECPOL', name:'Special Political & Decolonisation', desc:'GA Fourth Committee. Deals with political missions, decolonisation, and peacekeeping.', focus:'Peacekeeping review, occupied territories, decolonisation' },
  { abbr:'UNSC', name:'Security Council', desc:'The most senior committee. Permanent members (P5) have veto power. Resolutions are binding on all member states.', focus:'Peace and security, sanctions, peacekeeping authorisation' },
  { abbr:'HRC', name:'Human Rights Council', desc:'An intergovernmental body responsible for promoting and protecting human rights worldwide.', focus:'Country reviews, special procedures, thematic issues' },
  { abbr:'UNEP', name:'Environment Programme', desc:'Leads global environmental efforts and advocates for coherent implementation of environmental dimensions of sustainable development.', focus:'Climate, biodiversity, pollution, sustainable development' },
  { abbr:'WHO', name:'World Health Organisation', desc:'Specialised agency directing international health within the UN system.', focus:'Global health threats, pandemic response, universal health coverage' },
];

const PAPER_SECTIONS = [
  { num:'01', title:'Background', subtitle:'Define the issue, its scope, and why it matters — globally.',
    guidance:[
      { icon:'→', text:'<strong>What is the issue?</strong> Define it clearly and specifically. Avoid vague generalisations.' },
      { icon:'→', text:'<strong>Who is affected?</strong> Identify the key stakeholders — which countries, populations, or groups.' },
      { icon:'→', text:'<strong>What is the scale?</strong> Use statistics and concrete examples to show the real-world impact.' },
      { icon:'→', text:'<strong>Why now?</strong> Explain the current urgency. What has changed recently?' },
      { icon:'→', text:'<strong>Write factually.</strong> This section presents the issue — it does not yet present your country\'s view.' },
    ],
    example:'Water scarcity currently affects over 2 billion people globally, with the UN projecting that by 2030, demand will outstrip supply by 40%. The issue is particularly acute in sub-Saharan Africa and parts of South Asia, where climate change, population growth, and inadequate infrastructure have created compounding crises...',
    checklist:['Issue is clearly and specifically defined.','At least two credible statistics or evidence-based examples included.','Scope shows who is affected and to what degree.','Urgency is established — why does this matter now?','Written factually — no country position expressed yet.'],
    mistake:'The most common error: writing a Background that already expresses your country\'s view. The Background section describes the world as it is — it does not argue for anything yet.'
  },
  { num:'02', title:'Past International Actions', subtitle:'What has already been tried, and what have the results been?',
    guidance:[
      { icon:'→', text:'<strong>Find the key UN resolutions.</strong> Search the UN ODS for resolutions passed on this topic. Note the resolution number, date, and key provisions.' },
      { icon:'→', text:'<strong>Include other international action.</strong> Relevant treaties, regional agreements, NGO initiatives, and bilateral efforts all count.' },
      { icon:'→', text:'<strong>Evaluate, don\'t just list.</strong> What did each action achieve? Where did it fall short? What remains unresolved?' },
      { icon:'→', text:'<strong>Show the gap.</strong> By the end of this section, the reader should understand why this issue is still before the committee.' },
    ],
    example:'Resolution 64/292 (2010) declared safe water and sanitation a human right. While this resolution established an important normative framework, implementation has been inconsistent — particularly in OECD-non-member states where reporting mechanisms remain weak...',
    checklist:['At least two specific past actions cited with details (resolution numbers, treaty names, dates).','Each action evaluated — not just listed.','Gaps and limitations in past actions clearly identified.','Clear link between past failures and current need for action.'],
    mistake:'Don\'t simply list resolutions without evaluation. "The UN passed Resolution X in 2010" tells the reader nothing useful. What did it require? Did it work? Why or why not?'
  },
  { num:'03', title:'Country Policy', subtitle:'Your country\'s official position, interests, and past actions.',
    guidance:[
      { icon:'→', text:'<strong>This is the hardest section.</strong> You are writing from your assigned country\'s perspective — not your own. The policy you express must be your country\'s actual policy.' },
      { icon:'→', text:'<strong>Research official positions.</strong> Find government websites, UN voting records, speeches by your country\'s representatives, and statements to treaty bodies.' },
      { icon:'→', text:'<strong>Explain why your country holds this position.</strong> National interests are shaped by history, economy, culture, and geography. Show the reasons, not just the stance.' },
      { icon:'→', text:'<strong>Acknowledge complexity.</strong> If your country\'s position is evolving, or if there are internal tensions, a nuanced paper is stronger than an oversimplified one.' },
    ],
    example:'Brazil, as a country whose territory contains 60% of the Amazon basin, has historically positioned itself as a defender of national sovereignty over natural resources while simultaneously participating in international climate frameworks...',
    checklist:['Position clearly stated and grounded in actual country policy.','At least one piece of evidence — voting record, official statement, or treaty ratification — cited.','Reasons behind the position explained (not just stated).','Written from the country\'s perspective, not the student\'s personal view.'],
    mistake:'Writing what you think your country should do rather than what it actually does. If your country\'s position is one you disagree with personally, that\'s the discipline of MUN — represent it accurately anyway.'
  },
  { num:'04', title:'Possible Solutions', subtitle:'Actionable recommendations consistent with your country\'s policy.',
    guidance:[
      { icon:'→', text:'<strong>Must be consistent with your country\'s policy.</strong> Your solutions cannot contradict what you wrote in Section 3.' },
      { icon:'→', text:'<strong>Must be within the committee\'s powers.</strong> A GA committee cannot pass binding sanctions. Know what your committee can actually do.' },
      { icon:'→', text:'<strong>Be specific and actionable.</strong> "The committee should address this issue" is not a solution. Propose specific mechanisms, timelines, and actors.' },
      { icon:'→', text:'<strong>Anticipate objections.</strong> A strong section acknowledges that other delegations may have different priorities and shows how your solution addresses common ground.' },
      { icon:'→', text:'<strong>This section becomes your resolution clauses.</strong> Draft these solutions as if they could be directly converted into operative clause language.' },
    ],
    example:'Brazil recommends the committee establish a Technology Transfer Fund for Water Infrastructure, capitalising at $500 million over five years, with governance split between donor and recipient nations on a 50/50 basis...',
    checklist:['At least two specific, actionable solutions proposed.','Solutions consistent with country policy from Section 3.','Solutions feasible within the committee\'s mandate.','At least one solution addresses likely objections from other blocs.','Solutions specific enough to become resolution clauses.'],
    mistake:'Proposing solutions that your own country would veto or that exceed the committee\'s authority. Check your country\'s positions and the committee\'s mandate before drafting.'
  },
];

const PROC_PANELS = {
  points:{rows:[['Point of Order','A procedural error has occurred. Must be addressed before proceeding.','Immediately — interrupts current speaker','Raise placard and state "Point of Order"'],['Point of Personal Privilege','You cannot participate effectively (can\'t hear, health issue, etc.).','Immediately — interrupts current speaker','Raise placard and state "Point of Personal Privilege"'],['Point of Information','A question for a delegate who has just spoken, or directed at resolution sponsors.','After a speaker finishes','Raise placard; speaker chooses whether to accept'],['Point of Inquiry','A question about rules of procedure directed at the Chair.','During debate','Raise placard; Chair answers']],note:'Points cannot be debated or voted upon — they must be addressed immediately by the Chair. Points of Order and Personal Privilege interrupt current speakers.'},
  motions:{rows:[['Open Speakers List','Begin formal debate','Requires a second. No vote needed.','Standard opening move'],['Motion for Moderated Caucus','Structured timed discussion on a subtopic','Requires: topic, speaker time, total time. Simple majority.','Specify all three parameters'],['Motion for Unmoderated Caucus','Informal negotiation period','Requires: duration. Simple majority.','Max usually 20–30 min'],['Motion to Extend Caucus','Extend current caucus','Simple majority. Can only extend once.','Must be moved before caucus ends'],['Motion to Close Debate','Move to immediate vote on resolution','Requires a second. 2/3 majority to pass.','No further amendments after closure'],['Motion to Adjourn Debate','Temporarily suspend debate on a resolution','Simple majority. Returns later.','Resolution stays on agenda'],['Motion to Adjourn Meeting','End the session entirely','Simple majority.','Use with care'],['Motion to Table/Postpone','Remove topic from current agenda','Simple majority.','Kills the resolution for this session']],note:'Most motions require a second (another delegate must call "Second"). Know the difference between Closure of Debate (permanent) and Adjournment of Debate (temporary).'},
  voting:{rows:[['Yes','Votes in favour of the resolution or amendment','Counts toward required majority','Standard affirmative vote'],['No','Votes against the resolution or amendment','Counts against passage','Standard negative vote'],['Abstain','Neither yes nor no — on the record','Does NOT count toward majority calculation','Not available in all committees'],['Pass','Defer your vote until others have voted','Allowed only once per resolution','Must vote yes, no, or abstain when called again'],['Present and Voting','Declaration used in roll call to count present delegates','Used during voting procedure','Sets the quorum for majority calculation']],note:'Simple majority = 50% + 1 of delegates present and voting. Procedural votes usually require simple majority. Substantive votes may require 2/3 majority. Abstentions are NOT counted in the denominator.'},
  speeches:{rows:[['Opening Speech','Deliver your country\'s position on the topic at the start of committee','Usually 60–90 seconds','Must be within time limit; yield remaining time'],['Yield to Another Delegate','Give your remaining time to a specific delegate to continue speaking','After your speech, if time remains','Cannot be refused by the Chair'],['Yield to Questions','Allow other delegates to ask questions using your remaining time','After your speech, if time remains','You choose which questions to accept'],['Yield to the Chair','Return remaining time to the Chair with no further action','After your speech, if time remains','Most common yield — simplest option'],['Right of Reply','Respond when your country has been directly and unfairly cited','After a speech that mentions your country','Must be requested from the Chair before the next speaker begins']],note:'Always know your time limit before you begin. Running over time damages your credibility. Yield clearly and loudly so the Chair hears you.'},
  caucus:{rows:[['Moderated Caucus','Formal, timed discussion on a specific subtopic. Recorded in minutes.','Motion: specify topic, individual speaking time, total time. Majority vote.','Stay at your seat; speak when recognised by Chair'],['Unmoderated Caucus','Informal break. Delegates move freely and negotiate directly.','Motion: specify duration. Majority vote.','Move, lobby, draft — this is where resolutions are built'],['Working Paper','Early draft of a resolution circulated during unmoderated caucus','No formal procedure — circulate informally','Not officially before committee until formally submitted'],['Bloc','Group of delegates with aligned positions','Form during unmoderated caucuses; formalise as resolution sponsors','Larger blocs have more negotiating leverage'],['Lobbying','Direct negotiation with other delegates','Primarily in unmoderated caucus','Listen to objections — the best resolutions incorporate them']],note:'The unmoderated caucus is where real diplomacy happens. Spend it wisely: identify potential allies early, understand objections before drafting, and don\'t commit to language prematurely.'},
};

const PREAM_VERBS = [
  { category:'Awareness', verbs:[{word:'Acknowledging',desc:'Recognising something as true or important without necessarily endorsing a specific action.'},{word:'Aware of',desc:'Taking note of a situation or condition. Relatively neutral — used for established facts.'},{word:'Bearing in mind',desc:'Keeping specific considerations in mind when approaching the issue.'},{word:'Cognisant of',desc:'Formally aware of — slightly more emphatic than "aware of". Used for significant contextual factors.'},{word:'Convinced that',desc:'Expressing firm belief. Stronger than awareness — signals a normative commitment.'}]},
  { category:'Reference to prior action', verbs:[{word:'Recalling',desc:'Referring back to previous UN resolutions, decisions, or declarations on this topic.'},{word:'Reaffirming',desc:'Strongly endorsing previously stated principles or commitments. One of the strongest preambulatory terms.'},{word:'Recognising',desc:'Formally acknowledging a situation, trend, or principle. Less strong than reaffirming.'},{word:'Noting',desc:'Drawing attention to a specific fact, situation, or document. Neutral and factual in tone.'},{word:'Welcoming',desc:'Expressing positive acknowledgement of a recent development or action taken by a body.'}]},
  { category:'Concern', verbs:[{word:'Alarmed by',desc:'Expressing significant concern about a threatening situation. Use when urgency needs to be signalled.'},{word:'Concerned about',desc:'Expressing worry about a situation. More moderate than "alarmed by". Very common.'},{word:'Deeply concerned',desc:'Heightened concern. Stronger signal of urgency than "concerned about".'},{word:'Disturbed by',desc:'Expressing a negative reaction to a situation — often used for violations of norms or principles.'},{word:'Emphasising',desc:'Drawing particular attention to a principle or consideration the committee believes is central.'}]},
];

const OPER_VERBS = [
  { category:'Requesting action', verbs:[{word:'Calls upon',desc:'Formally requests member states or other bodies to take action. Non-binding but politically significant.'},{word:'Encourages',desc:'Expresses the committee\'s support for an action without requiring it. Weaker than "calls upon".'},{word:'Invites',desc:'Formally requests a body or state to do something, with a tone of positive expectation.'},{word:'Requests',desc:'Formally asks a specific body — often the Secretary-General — to take a defined action.'},{word:'Urges',desc:'Stronger than "encourages" but weaker than "demands". Common in human rights resolutions.'}]},
  { category:'Decisions & declarations', verbs:[{word:'Decides',desc:'The committee makes a formal decision. The strongest operative verb — used for binding actions (SC only) or core committee decisions.'},{word:'Declares',desc:'The committee makes a formal declaration of principle or position.'},{word:'Affirms',desc:'Formally confirms or endorses a position, principle, or previous resolution.'},{word:'Condemns',desc:'Strongly disapproves of an action or situation. Politically significant — use deliberately.'},{word:'Demands',desc:'Requires action. The strongest non-deciding operative verb. Often reserved for serious violations.'}]},
  { category:'Process & support', verbs:[{word:'Establishes',desc:'Creates a new mechanism, fund, committee, or body to address the issue.'},{word:'Recommends',desc:'Suggests a course of action without requiring it. Common in GA resolutions.'},{word:'Supports',desc:'Expresses endorsement for an existing initiative, body, or approach.'},{word:'Takes note of',desc:'Acknowledges something without necessarily endorsing it. Weaker than "welcomes" or "affirms".'},{word:'Welcomes',desc:'Expresses positive acknowledgement of an action, initiative, or report.'}]},
];

const RES_FORMAT = [
  { abbr:'Header', name:'Resolution header', desc:'Includes: committee name, topic, sponsors (countries that wrote it), signatories (countries supporting debate).', role:'Format: "Committee on [Topic] / Sponsors: [Country A, Country B] / Signatories: [Country C, Country D]"', note:'Required before submission' },
  { abbr:'Preamble', name:'Preambulatory clauses', desc:'Context, background, references to prior action, and the committee\'s concerns. Begin with a gerund (e.g. "Noting", "Recalling").', role:'Each clause is a separate sentence, separated by commas. The preamble ends with a colon before the operative section.', note:'Gerund + comma — no full stop' },
  { abbr:'Operative', name:'Operative clauses', desc:'The actual decisions and recommendations of the committee. Begin with a present-tense verb (e.g. "Calls upon", "Establishes").', role:'Numbered 1, 2, 3… Each clause is a separate sentence separated by semicolons. The final clause ends with a full stop.', note:'Present tense verb + semicolon' },
  { abbr:'Sub-clause', name:'Sub-clauses', desc:'Operational detail within an operative clause, indented and lettered (a, b, c).', role:'Used when a single operative clause contains multiple related components. Each sub-clause separated by commas.', note:'Indented, lettered (a, b, c)' },
];

const DELEGATE_TIPS = [
  { category:'Preparation', title:'Know your country — deeply', body:'The most common mistake is arriving in committee without knowing your country\'s actual positions. Find at least three specific, verifiable positions your country holds on the topic. Voting records, official statements, and UN speeches are your best sources.' },
  { category:'Preparation', title:'Know your committee\'s mandate', body:'Your committee can only do what it has the authority to do. A GA committee cannot pass binding sanctions. Know exactly what kinds of resolutions your committee can pass before you start drafting.' },
  { category:'Opening speech', title:'State your position first', body:'In your opening speech, state your country\'s position clearly in the first sentence. Don\'t bury it in context. Delegates need to know where you stand in order to decide whether to approach you.' },
  { category:'Opening speech', title:'Propose, don\'t just describe', body:'The strongest opening speeches end with a clear signal of what solutions your country will support. Other delegates should leave your speech knowing whether to approach you as a potential ally.' },
  { category:'Caucusing', title:'Listen before you lobby', body:'In the first unmoderated caucus, spend more time listening than talking. Identify who the key players are, what the major fault lines are, and which blocs are forming — before you commit to anything.' },
  { category:'Caucusing', title:'Find the real disagreements', body:'Most MUN disagreements are about premises, not conclusions. Two delegations who both "support climate action" may disagree completely about sovereignty, technology transfer, or financing. Find the actual sticking point.' },
  { category:'Resolutions', title:'Draft around the consensus, not your position', body:'The best resolution is not the one that fully reflects your country\'s position — it\'s the one that can pass. Draft language that other blocs can accept, then negotiate the details in your favour.' },
  { category:'Resolutions', title:'Operative clauses must be specific', body:'"Encourages member states to cooperate on this issue" will pass easily and accomplish nothing. Specific operative clauses — with mechanisms, timelines, and named actors — are harder to agree on but infinitely more valuable.' },
  { category:'Debate', title:'Engage with what was actually said', body:'The most common debate failure: responding to the other delegation\'s argument as you understood it before they spoke. Listen to what was actually said, then respond specifically to it.' },
  { category:'Procedure', title:'Use procedure strategically', body:'A well-timed moderated caucus request can steer committee discussion toward your topic or away from a debate you\'re losing. Procedural tools are not just administrative — they\'re diplomatic instruments.' },
  { category:'Reflection', title:'Your position may be uncomfortable', body:'You may be assigned a country whose position you strongly disagree with. This is the point. Accurately representing a position you don\'t personally hold is one of the most valuable intellectual exercises MUN offers.' },
  { category:'Reflection', title:'The goal is not to win', body:'The goal is to reach the best possible resolution on a complex global problem, given the constraints of divergent national interests. Delegates who understand this tend to produce better outcomes — and have better experiences.' },
];

const GLOSSARY_TERMS = [
  { term:'Diplomacy', def:'The practice of managing international relations through negotiation and communication rather than force.', unit:1 },
  { term:'Negotiation', def:'A process in which parties discuss and reach mutually acceptable agreements.', unit:1 },
  { term:'Multilateral', def:'Involving three or more countries or parties, as in multilateral diplomacy or treaties.', unit:1 },
  { term:'Sovereignty', def:'The authority of a state to govern itself, free from external control. A foundational principle of the UN Charter.', unit:1 },
  { term:'National Interests', def:'The goals and priorities a country seeks to advance in international relations — economic, security, cultural, and political.', unit:1 },
  { term:'Collective Security', def:'The principle that an attack on one member is treated as an attack on all — the concept that failed in the League of Nations era.', unit:1 },
  { term:'League of Nations', def:'The international organisation established after WWI intended to maintain peace. Its failure set the context for the creation of the UN.', unit:1 },
  { term:'UN Charter', def:'The foundational treaty of the United Nations, signed in 1945 in San Francisco. It defines the UN\'s purposes, principles, and structure.', unit:1 },
  { term:'General Assembly', def:'One of the six main UN organs. All 193 member states have one vote. Handles most international issues; resolutions are non-binding but politically significant.', unit:1 },
  { term:'Security Council', def:'The UN organ primarily responsible for international peace and security. Has 5 permanent members (P5) with veto power, and 10 elected members. Can pass binding resolutions.', unit:1 },
  { term:'ECOSOC', def:'The Economic and Social Council. Coordinates the UN\'s economic, social, and environmental work and oversees many specialised agencies.', unit:1 },
  { term:'Trusteeship Council', def:'One of the six main UN organs. Supervised non-self-governing territories transitioning to independence. Now largely inactive.', unit:1 },
  { term:'ICJ', def:'The International Court of Justice. The UN\'s principal judicial organ, settling legal disputes between states. Located in The Hague, Netherlands.', unit:1 },
  { term:'UN Secretariat', def:'The UN\'s administrative arm, headed by the Secretary-General. Implements decisions of other organs and manages day-to-day operations.', unit:1 },
  { term:'Self-Determination', def:'The right of peoples to determine their own political status and form of government. A core principle of the UN Charter.', unit:1 },
  { term:'Peacekeeping', def:'UN-led operations deployed to conflict zones to maintain ceasefires, protect civilians, and support peace agreements. Distinct from enforcement actions.', unit:1 },
  { term:'Non-intervention', def:'The principle that the UN should not intervene in the internal affairs of member states — balanced against humanitarian obligations.', unit:1 },
  { term:'International Law', def:'The body of rules and norms governing relations between states, including treaties, conventions, and customary practices.', unit:1 },
  { term:'Precursor', def:'Something that came before and led to something else — the League of Nations was the precursor to the United Nations.', unit:1 },
  { term:'Atlantic Charter (1941)', def:'A joint declaration by Roosevelt and Churchill setting out Allied war aims and laying the conceptual groundwork for the UN.', unit:1 },
  { term:'Dumbarton Oaks (1944)', def:'Conference between Allied powers that produced the framework for what became the United Nations.', unit:1 },
  { term:'Delegate', def:'A representative of a country in a Model UN committee. You speak and act on behalf of your country\'s official position — not your own views.', unit:2 },
  { term:'DISEC', def:'Disarmament and International Security Committee — GA First Committee. Deals with disarmament, global challenges, and threats to peace.', unit:2 },
  { term:'SOCHUM', def:'Social, Humanitarian, and Cultural Committee — GA Third Committee. Deals with human rights, social development, and humanitarian issues.', unit:2 },
  { term:'UNSC', def:'United Nations Security Council. In MUN, represents the most senior committee — delegates often represent P5 countries with veto power.', unit:2 },
  { term:'HRC', def:'Human Rights Council. An intergovernmental body responsible for strengthening the promotion and protection of human rights globally.', unit:2 },
  { term:'Position Paper', def:'A formal document written from the perspective of your assigned country, outlining your country\'s position on a committee topic and proposed solutions.', unit:2 },
  { term:'Background Section', def:'The first section of a position paper. Defines the global issue, its scope, and why it matters — from a factual, not national, perspective.', unit:2 },
  { term:'Past International Actions', def:'The second section of a position paper. Summarises what the UN and other bodies have done to address the issue previously.', unit:2 },
  { term:'Country Policy', def:'The third section of a position paper. Articulates your assigned country\'s official stance, past actions, and interests related to the issue.', unit:2 },
  { term:'Possible Solutions', def:'The fourth section of a position paper. Proposes specific, actionable solutions consistent with your country\'s policy and the committee\'s mandate.', unit:2 },
  { term:'UN ODS', def:'Official Document System — the UN\'s online archive of all official UN documents, including resolutions, meeting records, and reports. Essential for research.', unit:2 },
  { term:'Primary Sources', def:'Original documents, official statements, government reports, and UN resolutions — materials produced by the original actors. Higher authority than secondary sources.', unit:2 },
  { term:'Secondary Sources', def:'Analysis, journalism, and academic work that interprets primary source material. Useful for context but must be evaluated for bias.', unit:2 },
  { term:'Blocs', def:'Groups of countries with aligned interests and positions — often geographic (e.g. African Group) or ideological (e.g. Non-Aligned Movement). Crucial for coalition-building.', unit:2 },
  { term:'Elevator Pitch', def:'A brief (60–90 second) verbal summary of your country\'s position and proposed solutions. Must be clear, engaging, and focused on key points.', unit:2 },
  { term:'Stakeholders', def:'Individuals, groups, or organisations that have a direct interest in or are affected by a global issue. Must be considered in background research and proposed solutions.', unit:2 },
  { term:'Credibility', def:'The trustworthiness and authority of a source — determined by who produced it, for what purpose, and with what evidence.', unit:2 },
  { term:'Bias', def:'A tendency in a source to favour a particular perspective or outcome, often distorting the presentation of facts. Must be identified and accounted for.', unit:2 },
  { term:'Dais', def:'The raised platform at the front of the committee room where the Chair and Director sit. The dais controls floor procedure.', unit:3 },
  { term:'Placard', def:'The name card that delegates raise to be recognised by the Chair. Raising your placard signals that you wish to speak or motion.', unit:3 },
  { term:'Decorum', def:'The standard of respectful, professional conduct required in committee. Includes language, body language, and how delegates address each other.', unit:3 },
  { term:'Speakers List', def:'The formal list of delegates waiting to deliver speeches in committee. You must be added to the list by the Chair.', unit:3 },
  { term:'Point of Order', def:'Raised when a delegate believes committee procedure is being violated. Must be addressed immediately by the Chair before business continues.', unit:3 },
  { term:'Point of Privilege', def:'Raised when a delegate\'s ability to participate is impeded — e.g. can\'t hear, microphone not working. Must be addressed immediately.', unit:3 },
  { term:'Point of Information', def:'A question directed at a delegate who has just finished speaking, or directed at resolution sponsors. The speaker chooses whether to accept.', unit:3 },
  { term:'Yielding the Floor', def:'Giving up your remaining speaking time to another delegate, to the Chair, or back to the floor after delivering a speech.', unit:3 },
  { term:'Moderated Caucus', def:'A structured, timed discussion period where delegates speak in turn on a specific subtopic. Proposed by motion. Remains on the record.', unit:3 },
  { term:'Unmoderated Caucus', def:'An informal break from formal proceedings where delegates move freely and negotiate directly with other delegations. Essential for coalition-building.', unit:3 },
  { term:'Working Paper', def:'An early draft of a resolution being circulated and developed before formally submitted. Not yet officially before the committee.', unit:3 },
  { term:'Preambulatory Clauses', def:'The opening clauses of a resolution. Begin with a gerund (e.g. "Noting", "Recalling") and provide context, background, and justification for operative clauses.', unit:3 },
  { term:'Operative Clauses', def:'The action clauses of a resolution. Begin with a present-tense verb (e.g. "Calls upon", "Urges") and state what the committee decides or recommends.', unit:3 },
  { term:'Sponsors', def:'The countries that wrote and formally support a resolution draft. Listed first and responsible for introducing the resolution to the committee.', unit:3 },
  { term:'Signatories', def:'Countries that support bringing a resolution to the floor for debate, but do not necessarily support its passage.', unit:3 },
  { term:'Friendly Amendment', def:'A proposed change to a resolution accepted by all sponsors. Does not require a vote — automatically incorporated.', unit:3 },
  { term:'Unfriendly Amendment', def:'A proposed change to a resolution not accepted by all sponsors. Must be debated and voted upon by the full committee.', unit:3 },
  { term:'Bloc Formation', def:'The process of delegates aligning with countries that share similar positions, to collaboratively draft and support resolutions.', unit:3 },
  { term:'Lobbying', def:'The informal process of negotiating with other delegations — in unmoderated caucuses — to build support for your resolution or position.', unit:3 },
  { term:'Closure of Debate', def:'A motion to end debate on a resolution and move to an immediate vote. Requires a second and a procedural vote.', unit:3 },
  { term:'Roll Call Vote', def:'A vote in which each country\'s position is recorded individually. Used for sensitive or significant resolutions. Delegates state "Yes", "No", or "Abstain".', unit:3 },
  { term:'Abstain', def:'Choosing not to vote yes or no. An abstention does not count toward majority calculation but is on the record.', unit:3 },
  { term:'Adoption', def:'When a resolution receives sufficient votes to pass and becomes an official committee resolution.', unit:3 },
  { term:'Consensus', def:'Agreement reached without a formal vote, when no delegation wishes to object. The most diplomatically significant outcome — implies broad support.', unit:3 },
];

const RUBRICS = {
  paper: {
    title: 'Position Paper', weight: 'Unit 2 summative assessment',
    criteria: [
      { criterion:'Background', l4:'Issue precisely defined with compelling statistics; stakeholders clearly identified; global scope established; urgency justified with evidence', l3:'Issue clearly defined; statistics included; scope and stakeholders addressed; urgency established', l2:'Issue defined but vague; some statistics; scope partially addressed; urgency implied', l1:'Issue not clearly defined; minimal or no evidence; scope missing; no urgency established' },
      { criterion:'Past Actions', l4:'3+ past actions cited with accurate details; each rigorously evaluated; gaps clearly identified; link to present need explicit', l3:'2+ past actions cited with details; most evaluated; gaps identified; link to present need present', l2:'1–2 past actions cited; evaluation minimal; gaps partially identified', l1:'Past actions listed without detail or evaluation; no gaps identified' },
      { criterion:'Country Policy', l4:'Policy accurately grounded in 2+ verified sources; interests behind policy fully explained; nuanced and sophisticated representation', l3:'Policy accurately stated with 1 verified source; interests explained; representation accurate', l2:'Policy stated but partially or inaccurately grounded; limited source evidence; interests partially explained', l1:'Policy unclear or inaccurate; no source evidence; student\'s own views expressed' },
      { criterion:'Possible Solutions', l4:'2+ specific, actionable solutions fully consistent with policy and committee mandate; likely objections addressed; language ready for operative clauses', l3:'2 specific solutions consistent with policy and mandate; most objections considered', l2:'1–2 solutions proposed but vague or partially inconsistent with policy/mandate', l1:'No clear solutions; solutions contradict country policy or exceed committee mandate' },
      { criterion:'Accuracy & Sources', l4:'All facts verified; 4+ credible, varied sources cited correctly; no factual errors', l3:'Facts generally accurate; 3+ credible sources cited; minor errors only', l2:'Some facts unverified; 2 sources cited; some factual errors', l1:'Facts frequently inaccurate; 0–1 sources; significant factual errors' },
      { criterion:'Structure & Format', l4:'Four sections clearly delineated; correct formatting throughout; professional diplomatic register; excellent cohesion between sections', l3:'Four sections present; mostly correct formatting; appropriate register; sections mostly cohesive', l2:'Sections partially present or merged; some formatting errors; register inconsistent', l1:'Structure missing or confused; significant formatting errors; inappropriate register' },
    ]
  },
  speech: {
    title: 'Opening Speech', weight: 'Unit 3 formative/summative',
    criteria: [
      { criterion:'Content & Position', l4:'Position stated clearly in opening sentence; all three key points covered; specific evidence cited; call to action strong and clear', l3:'Position clearly stated; at least two key points covered; some evidence; call to action present', l2:'Position stated but delayed; one key point covered; limited evidence; weak call to action', l1:'Position unclear or absent; no clear structure; no evidence; no call to action' },
      { criterion:'Country Accuracy', l4:'Speech entirely consistent with actual country policy; specific policy details referenced; bloc alignment signalled correctly', l3:'Speech mostly consistent with country policy; accurate overall; minor inconsistencies', l2:'Speech partially consistent; some inaccuracies in policy representation', l1:'Speech does not reflect country policy; significant inaccuracies' },
      { criterion:'Delivery & Time', l4:'Delivered within time limit; confident and measured pace; strong eye contact; volume appropriate throughout', l3:'Within time limit; generally confident; adequate eye contact; volume appropriate', l2:'Over/under time limit by >15s; pace uneven; limited eye contact or volume issues', l1:'Significantly over/under time; poor delivery; read verbatim; no eye contact' },
      { criterion:'Diplomatic Register', l4:'Formal, third-person language throughout; correct diplomatic address ("This delegation…"); appropriate tone for topic', l3:'Mostly formal; correct address forms; appropriate tone', l2:'Register inconsistent; occasional informal language; address forms sometimes incorrect', l1:'Informal language; incorrect address forms; inappropriate tone' },
    ]
  },
  resolution: {
    title: 'Resolution Drafting', weight: 'Unit 3 collaborative assessment',
    criteria: [
      { criterion:'Preambulatory Clauses', l4:'4+ preambs; correct gerund forms; logically ordered; provides complete context for operative section; each clause purposeful', l3:'3+ preambs; correct format; logical order; adequate context', l2:'2 preambs; some format errors; order partially logical; context partial', l1:'0–1 preambs; format errors; no clear contextual function' },
      { criterion:'Operative Clauses', l4:'4+ operative clauses; specific, actionable, and feasible; correct verb-semicolon format; mechanisms and actors named; escalating in impact', l3:'3+ operative clauses; mostly specific; correct format; actors identified', l2:'2 operative clauses; some vague language; format partially correct', l1:'0–1 operative clauses; vague or unfeasible; format errors' },
      { criterion:'Policy Consistency', l4:'Every clause consistent with all sponsors\' stated policies; reflects bloc negotiations; no contradictions', l3:'Most clauses consistent with sponsor policies; minor tensions', l2:'Some clauses inconsistent with sponsor policies', l1:'Resolution contradicts stated country policies' },
      { criterion:'Diplomatic Language', l4:'Formal UN register throughout; correct verb choices for diplomatic weight; no informal language', l3:'Mostly formal; verb choices appropriate; minor lapses', l2:'Inconsistent register; some inappropriate verb choices', l1:'Informal language; incorrect verb forms or tense' },
      { criterion:'Formatting', l4:'Header complete; correct sponsor/signatory list; comma-separated preambs; semicolon-separated operatives; final full stop', l3:'Header present; mostly correct punctuation; minor errors', l2:'Header incomplete; some punctuation errors; structure partially correct', l1:'Header missing; significant formatting errors throughout' },
    ]
  },
  participation: {
    title: 'Committee Participation', weight: 'Unit 3 ongoing assessment',
    criteria: [
      { criterion:'Frequency & Engagement', l4:'Speaks 4+ times; consistently on the speakers list; actively participates in all caucus types; never passive', l3:'Speaks 2–3 times; regular presence on speakers list; participates in caucuses', l2:'Speaks 1–2 times; occasional speakers list presence; limited caucus participation', l1:'Speaks 0–1 times; rarely on speakers list; disengaged in caucuses' },
      { criterion:'Position Accuracy', l4:'All contributions accurately reflect assigned country policy; no position drift; corrects self when challenged', l3:'Most contributions reflect country policy; occasional minor drift; position generally consistent', l2:'Some contributions inconsistent with country policy; position drift evident', l1:'Contributions frequently inconsistent with or unaware of country policy' },
      { criterion:'Procedural Accuracy', l4:'All points and motions correctly used; procedure enhances participation; uses procedure strategically', l3:'Points and motions mostly correct; minor procedural errors; procedure used purposefully', l2:'Some procedural errors; occasional incorrect use of points/motions', l1:'Frequent procedural errors; misuse of points; detracts from committee proceedings' },
      { criterion:'Diplomacy & Collaboration', l4:'Actively builds coalitions; negotiates effectively in caucuses; amendments used constructively; builds consensus', l3:'Participates in coalition-building; some effective negotiation; constructive in caucuses', l2:'Limited coalition-building; caucus participation minimal or unproductive', l1:'Isolated; no coalition-building; counterproductive in caucuses or absent' },
      { criterion:'Decorum', l4:'Exemplary decorum throughout; supports other delegates; models diplomatic communication', l3:'Appropriate decorum maintained; respectful communication', l2:'Occasional lapses in decorum; some inappropriate language or behaviour', l1:'Repeated decorum violations; disrespectful communication' },
    ]
  }
};

// ══════════════════════════════════════════
// PATHWAYS
// ══════════════════════════════════════════
const PATHWAYS = [
  {
    icon: '📄',
    title: 'Writing your position paper',
    goal: 'Unit 2 deliverable',
    colour: 'var(--u2)',
    steps: [
      { label: 'Understand the committee', href: '#unit2' },
      { label: 'Evaluate your sources', href: '#unit2' },
      { label: 'Build each section', href: '#unit2' },
      { label: 'Use the paper builder', href: '#unit2' },
      { label: 'Check the rubric', href: '#rubrics' },
      { label: 'Study the vocabulary', href: '#glossary' },
    ]
  },
  {
    icon: '🌐',
    title: 'Preparing for committee day',
    goal: 'Unit 3 simulation',
    colour: 'var(--u3)',
    steps: [
      { label: 'Know your procedure', href: '#procedure' },
      { label: 'Practise resolution clauses', href: '#resbuilder' },
      { label: 'Understand your country\'s position', href: '#countryProfile' },
      { label: 'Review the participation rubric', href: '#rubrics' },
      { label: 'Read the delegate tips', href: '#unit3' },
    ]
  },
  {
    icon: '📚',
    title: 'Studying for assessment',
    goal: 'Test or essay prep',
    colour: 'var(--u1)',
    steps: [
      { label: 'Flashcard mode — all units', href: '#glossary' },
      { label: 'Quiz mode — self-test', href: '#glossary' },
      { label: 'Review the timeline', href: '#unit1' },
      { label: 'Study organ functions', href: '#unit1' },
      { label: 'Check rubric descriptors', href: '#rubrics' },
    ]
  },
  {
    icon: '🗣️',
    title: 'Delivering your opening speech',
    goal: 'Unit 3 · first session',
    colour: 'var(--u3)',
    steps: [
      { label: 'Review your position paper', href: '#unit2' },
      { label: 'Know your time limit', href: '#procedure' },
      { label: 'Study the speech rubric', href: '#rubrics' },
      { label: 'Practise yielding the floor', href: '#procedure' },
      { label: 'Read delegate tips on opening speeches', href: '#unit3' },
    ]
  },
  {
    icon: '🔍',
    title: 'Researching your country',
    goal: 'Unit 2 · research phase',
    colour: 'var(--u2)',
    steps: [
      { label: 'Understand your committee', href: '#unit2' },
      { label: 'Evaluate your sources', href: '#unit2' },
      { label: 'Generate a research brief', href: '#countryProfile' },
      { label: 'Find UN voting records (UN ODS)', href: '#glossary' },
      { label: 'Learn key Unit 2 vocabulary', href: '#glossary' },
    ]
  },
  {
    icon: '⚖️',
    title: 'Drafting a resolution',
    goal: 'Unit 3 · drafting sessions',
    colour: 'var(--u3)',
    steps: [
      { label: 'Choose preambulatory verbs', href: '#resbuilder' },
      { label: 'Write operative clauses', href: '#resbuilder' },
      { label: 'Understand sponsors vs signatories', href: '#glossary' },
      { label: 'Know the amendment procedure', href: '#procedure' },
      { label: 'Check the resolution rubric', href: '#rubrics' },
    ]
  },
];
