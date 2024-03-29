
function showPositiveResult() {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <strong>Azospirillum lipoferum:</strong> Development of root system<br>
        <strong>Bacillus sp.:</strong> Phosphate-Solubilizing<br>
        <strong>Azotobacter:</strong> Nitrogen fixation
    `;
}

function showNegativeResult() {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <strong>Black or Stem Rust:</strong> Fungicides such as azoxystrobin and cyproconazole are effective in reducing stem rust.<br>
    
        <strong>Brown or Leaf Rust:</strong> Fungicides with Myclobutanil or Azoxystrobin are effective against rust fungi.<br>
        <strong>Yellow or Stripe Rust:</strong> Control with mixed cropping, avoiding excess nitrogenous fertilizers, and using Zineb or Propioconazole.<br>
        <strong>Loose Smut:</strong> Treat seeds with Vitavax before sowing and bury infected ear heads in the soil to prevent secondary spread.<br>
        <strong>Flag Smut:</strong> Treat seeds with carboxin.<br>
        <strong>Hill Bunt or Stinking Smut:</strong> Treat seeds with carboxin or carbendazim, grow during high-temperature periods, and adopt shallow sowing.<br>
        <strong>Karnal Bunt:</strong> Practice good hygiene and delay drilling of a second wheat crop after harvesting an infected wheat crop.<br>
        <strong>Fusarium Head Blight:</strong> Strobilurins like pyraclostrobin or azoxystrobin are effective.<br>
        <strong>Foot Rot:</strong> Follow crop rotation and treat seeds with Carboxin or Carbendazim.<br>
        <strong>Powdery Mildew:</strong> Spray Wettable Sulphur or Carbendazim.<br>
        <strong>Leaf Blight:</strong> Spray the crop with Mancozeb or Zineb.
    `;
}


function positiveResult(){
    document.getElementById("resultrice").style.display = "block";
    document.getElementById("resultrice").innerHTML =`
    <strong> Rice - Bacillus spp : </strong>Phosphate-Solubilizing <br>
    <strong> Rice - Azospirillum : </strong>Gibberellins-Development of plant growth <br>
    <strong> Rice - Pseudomonas spp : </strong>Siderophore-Protection against phytopathogens<br>
    <strong> Rice - Rice - Azospirillum : </strong>Nitrogen fixation<br>

    ` ;

}

function negativeResult() {
    document.getElementById("resultrice").style.display = "block";
    document.getElementById("resultrice").innerHTML = `
        <strong>Rice Blast - Magnaporthe grisea:</strong> Systemic fungicides such as pyroquilon and tricyclazole are possible chemicals for controlling the disease.<br>
        <strong>Bacterial Leaf Blight Of Rice - Xanthomonas oryzae:</strong> Spray Streptomycin sulphate + Tetracycline combination 300 g + Copper oxychloride 1.25kg/ha. If necessary repeat 15 days later. Application of bleaching powder @ 5 kg/ha in the irrigation water is recommended in the kresek stage.<br>
        <strong>Sheath Rot Of Rice - Sarocladium oryzae:</strong> Seed treatment with fungicides such as Mancozeb and Benomyl effectively eliminates seedborne inoculum. At booting stage, foliar spraying with carbendazim, edifenphos, or mancozeb was found to reduce sheath rot. Spray Carbendazim 250 g or Chlorothalonil 1 kg or Edifenphos 1 lit/ha.<br>
        <strong>Rice Brown Spot - Helminthosporium oryzae:</strong> Use fungicides (e.g., iprodione, propiconazole, azoxystrobin, trifloxystrobin, and carbendazim) as seed treatments. Treat seeds with hot water (53−54°C) for 10−12 minutes before planting, to control primary infection at the seedling stage.<br>
        <strong>False Smut Of Rice - Ustilaginoidea virens:</strong> Spraying of copper oxychloride at 2.5 g/litre or Propiconazole at 1.0 ml/litre at boot leaf and milky stages will be more useful to prevent the fungal infection. Seed treatment with carbendazim 2.0g/kg of seeds.<br>
        <strong>Sheath Blight Of Rice - Rhizoctonia solani:</strong> Control of sheath blight has been mainly through the use of foliar fungicides. Carbendazim (1 g/lit), Propiconazole (1ml/lit) may be applied. Spray Carbendazim 250 g or Chlorothalonil 1 kg or Edifenphos 1 lit/ha.<br>
        <strong>Tungro Disease Of Rice - Rice Tungro virus (RTSV and RTBV):</strong> In nursery when virus infection is low, apply Carbofuran granules @ 1 kg./ha to control vector population. During pre-tillering to mid-tillering when one affected hill/m is observed apply Carbofuran granules @ 3.5kg/ha to control insect vector.<br>
        <strong>Foot rot / Bakanae / Foolish Seedling Disease - Gibberella fujikuroi:</strong> Seed treatment using fungicides such as thiram, thiophanate-methyl, or benomyl is effective before planting. Benomyl or benomyl-t at 1-2% of seed weight should be used for dry seed coating.<br>
        <strong>Stem Rot Of Rice - Sclerotium oryzae:</strong> Chemicals such as fentin hydroxide sprayed at the mid-tillering stage, thiophanate-methyl sprayed at the time of disease initiation can reduce stem rot incidence in the rice field. The use of other fungicides such as Ferimzone and validamycin A also effective against the fungus.<br>
        <strong>Grassy Stunt Disease Of Rice - Rice grassy stunt tenuivirus:</strong> To control rice grassy stunt virus, the brown planthopper vectors need to be managed. This can be done either through the use of insecticides, brown plant hopper-resistant varieties, or synchronized crop establishment. Infected stubble needs to be plowed under after harvest to reduce the virus source.
    `;
}

function positiveResultMaize(){
    document.getElementById("resultmaize").style.display = "block";
    document.getElementById("resultmaize").innerHTML = `
        <strong>Maize - Bacillus amyloliquefaciens:</strong> Enhance salt tolerance & chlorophyll<br>
    `;
}

function negativeResultMaize() {
    document.getElementById("resultmaize").style.display = "block";
    document.getElementById("resultmaize").innerHTML = `
        <strong>Downy mildew - Peronospora parasitica:</strong> 
        Treatment:<br>
        - Use disease-free healthy seeds.<br>
        - Dry seeds to less than 14% moisture.<br>
        - Implement deep tillage and crop rotations for more than three years.<br>
        - Roguing of diseased plants and alternate grass hosts.<br>
        - Seed treatment with metalaxyl @ 6g/kg of seeds.<br>
        - Foliar spray with metalaxyl + mancozeb @ 1000 g or mancozeb 1000 g/ha after initial symptom / 20 DAP and 40 DAP.<br><br>

        <strong>Rust - Puccinia sorghi:</strong> 
        Treatment: Numerous fungicides are available for rust control. Products containing mancozeb, pyraclostrobin, pyraclostrobin + metconazole, pyraclostrobin + fluxapyroxad, azoxystrobin + propiconazole, trifloxystrobin + prothioconazole can be used to control the disease.<br><br>

        <strong>Leaf Blight - Cochliobolus heterostrophus:</strong> 
        Treatment: Daconil fungicides offer three-way protection to prevent leaf blight and to stop and control active diseases.<br><br>

        <strong>Turcicum blight - Exserohilum turcicum & Helminthosporium maydis:</strong> 
        Treatment: Seven fungicides were evaluated in vitro against Exserohilum turcicum causing leaf blight of maize. The treatment mancozeb 0.25% and combination treatments of carbendazim and mancozeb i.e. saff 0.25% recorded the lowest percent disease index (PDI) reducing the disease by 73.0% and 72.1% respectively.
    `;
}
function positiveResultFieldMustard(){
    document.getElementById("resultfieldmustard").style.display = "block";
    document.getElementById("resultfieldmustard").innerHTML = `
        <strong>Field Mustard - Bacillus spp.:</strong> Promoted root & shoot elongation<br>
    `;
}

function negativeResultFieldMustard() {
    document.getElementById("resultfieldmustard").style.display = "block";
    document.getElementById("resultfieldmustard").innerHTML = `
        <strong>Bacterial black rot - Xanthomonas campestris pv. campestris:</strong> 
        Treatment:<br>
        - Seed treatment with mercuric chloride for half an hour is effective in eradicating seed-borne infection.<br>
        - Hot water treatment of the seed at 50°C for 30 minutes is also effective.<br>
        - A three-year rotation of the crop is desirable.<br>
        - Strict sanitary precautions should be maintained.<br><br>

        <strong>White Rust - Albugo candida:</strong> 
        Treatment: T. viride seed treatment and soil application along with copper oxychloride and also garlic extract were found as suitable alternatives for the systemic fungicides for managing white rust especially in organic mustard production.<br><br>

        <strong>Sclerotinia White Mould - Sclerotinia sclerotiorum:</strong> 
        Treatment: Aviator (bixafen + prothioconazole) provides the most effective control of Sclerotinia as well as other important diseases, such as light leaf spot.<br><br>

        <strong>Aster Yellows - Aster Yellows Phytoplasma:</strong> 
        Treatment: Once aster yellows infects a plant, there is no way to cure it. Remove infected plants. Control perennial weeds. If infected by the aster yellows phytoplasma, these plants allow the pathogen to survive in the field from one year to the next.<br><br>

        <strong>Downy Mildew - Hyaloperonospora parasitica:</strong> 
        Treatment: Copper fungicides are often used to control downy mildew. While many people believe copper is approved for organic production, it is only conditionally approved.
    `;
}

function positiveResultCucumber(){
    document.getElementById("resultcucumber").style.display = "block";
    document.getElementById("resultcucumber").innerHTML = `
        <strong>Cucumber - Stenotrophomonas maltophilia:</strong> Prevent diseases<br>
    `;
}

function negativeResultCucumber() {
    document.getElementById("resultcucumber").style.display = "block";
    document.getElementById("resultcucumber").innerHTML = `
        <strong>Angular Leaf Spot - Pseudomonas syringae:</strong> 
        Treatment:<br>
        - Hot water treatment can remove some, but not all, bacteria.<br>
        - Rotate vegetables so two or more years go by before planting any member of the squash family in the same location.<br>
        - Use drip irrigation instead of overhead sprinklers if possible.<br><br>

        <strong>Bacterial Wilt - Erwinia tracheiphila:</strong> 
        Treatment: Bacterial wilt cannot be controlled once a plant is infected. In particular, chemical sprays are not effective for control once plants show symptoms. If you find bacterial wilt in your garden, immediately remove infected plants, and dispose of them by burning (where allowed by law) or burying them.<br><br>

        <strong>Phytophthora Crown And Root Rot - Phytophthora capsici:</strong> 
        Treatment: If Phytophthora is found in the field, remove diseased plants and surrounding healthy-looking border plants. In MSU trials, cucumbers treated with fungicides performed better than untreated plots.<br><br>

        <strong>Downy Mildew - Pseudoperonospora cubensis:</strong> 
        Treatment: Mix a tablespoon of ordinary baking soda into four litres of water, and stir in a tablespoon of liquid (non-detergent based) soap. Adding a tablespoon of vegetable oil is optional, but helps the mixture stick to the leaves.
    `;
}

// Watermelon
function positiveResultWatermelon(){
document.getElementById("resultwatermelon").style.display = "block";
document.getElementById("resultwatermelon").innerHTML = `
<strong>Watermelon - Paenibacillus polymyxa:</strong> Prevent diseases, root development<br>
<strong>Watermelon - Bacillus spp.:</strong> Prevent diseases & Nematode<br>
<strong>Watermelon - Rhizobium undicola:</strong> Nitrogen fixation<br>
`;
}

function negativeResultWatermelon() {
document.getElementById("resultwatermelon").style.display = "block";
document.getElementById("resultwatermelon").innerHTML = `
<strong>Downy Mildew - Pseudoperonospora cubensis:</strong> 
Treatment: Downy mildew doesn't like warm or dry weather. Organic controls include trying 3 parts of milk to 10 parts of water or one tablespoon of baking soda into one litre of water. Mix either option into a spray container and spray the affected foliage weekly.<br><br>

<strong>Powdery Mildew - Podosphaera xanthii:</strong> 
Treatment:
- Mix 1 tablespoon baking soda with 1 tablespoon vegetable oil and 1 teaspoon dish soap in 1 gallon of water.
- Mix 4 tablespoons baking soda with 2 tablespoons of Murphy’s oil soap in 1 gallon of water.
- Mix 2 to 3 tablespoons vinegar with 1 gallon of water. Be sure to test this first because vinegar can burn plants.
- Neem is an organic fungicide. Follow instructions on the label.
- Mix 1 part milk with 10 parts water.
- Some folks swear by mouthwash as an effective fungicide but it is not organic. They recommend 1 cup mouthwash to 3 cups of water.<br><br>

<strong>Anthracnose - Colletotrichum orbiculare:</strong> 
Treatment: The most effective fungicides for control are the protective fungicides containing chlorothalonil (e.g., Daconil), copper sprays containing copper diammonia diacetate (e.g., Liquicop), propiconazole (e.g., Banner Maxx II), and the systemic fungicide thiophanate-methyl (e.g., Cleary's 3336, for professional use only).<br><br>

<strong>Alternaria leaf spot - Alternaria cucmerina:</strong> 
Treatment: Avoid overhead watering to limit leaf wetness, and allow enough space at planting time for good air circulation and ample sun penetration. Keep your garden free of fallen leaves all season, and especially thorough at fall cleanup time.<br><br>

<strong>Fusarium Wilt - Fusarium oxysporum:</strong> 
Treatment: Fusarium wilt diseases are best controlled by using resistant or tolerant cultivars, not by using soil applied fungicides. Liming soils and using nitrate nitrogen fertilizer have been effective for management of F. oxysporum on chrysanthemum, aster, gladiolus, cucumber, tomato, and watermelon.<br><br>

<strong>Bud Necrosis disease - Watermelon bud necrosis orthotospovirus (WBNV):</strong> 
Treatment: For the management of WBNV in watermelon, an Integrated Pest Management (IPM) module has been devised which reduced the thrips population and WBNV incidence to a great extent besides increasing the fruit yield.
`;
}

// Guava
function positiveResultGuava(){
document.getElementById("resultguava").style.display = "block";
document.getElementById("resultguava").innerHTML = `
<strong>Guava - Staphylococcus:</strong> Promote the Growth under Adverse Environmental Conditions<br>
`;
}

function negativeResultGuava() {
document.getElementById("resultguava").style.display = "block";
document.getElementById("resultguava").innerHTML = `
<strong>Anthracnose - Colletotrichum gloeosporioides:</strong> 
Treatment:
- Cultural Practices: Prune infected branches and remove fallen fruit to reduce the disease's source. Maintain proper spacing between trees to improve air circulation. 
- Fungicides: Apply appropriate fungicides before the flowering season to prevent infection. Regular spraying during fruit development is also effective. For better control Spray.<br><br>

<strong>Guava Wilt - Fusarium oxysporum:</strong> 
Treatment:
- Resistant Varieties: Choose guava varieties resistant to Fusarium wilt. 
- Soil Sterilization: Solarize or steam-sterilize the soil before planting to kill pathogens. 
- Fungicides: Fungicidal drenches may help control the disease in severely affected trees. 
- Proper Irrigation: Ensure adequate but not excessive soil moisture, as overly wet conditions can exacerbate wilt.<br><br>

<strong>Powdery Mildew - Oidium psidii:</strong> 
Treatment:
- Pruning: Prune affected branches to improve air circulation and sunlight penetration. 
- Sulfur-Based Fungicides: Apply sulfur-based fungicides as a preventive measure. 
- Neem Oil: Neem oil can also be effective in managing powdery mildew.<br><br>

<strong>Bacterial Wilt - Erwinia psidii:</strong> 
Treatment:
- Sanitation: Remove and destroy infected plants promptly. 
- Avoid Overhead Irrigation: Use drip irrigation to prevent splashing of bacteria. 
- Copper-Based Sprays: Apply copper-based bactericides as a preventive measure. 
- Resistant Varieties: Consider planting guava varieties known for their resistance to bacterial wilt.<br><br>

<strong>Rust - Puccinia psidii:</strong> 
Treatment:
- Fungicides: Apply copper-based fungicides during the rainy season to prevent rust. 
- Pruning: Remove and destroy severely infected leaves and branches. 
- Proper Spacing: Ensure adequate spacing between trees for better air circulation.<br><br>

<strong>Root-Knot Nematodes - Meloidogyne spp.:</strong> 
Treatment:
- Soil Solarization: Solarize the soil before planting guava to reduce nematode populations. 
- Resistant Varieties: Choose guava varieties that are less susceptible to root-knot nematodes. 
- Nematode-Resistant Cover Crops: Incorporate nematode-resistant cover crops into your orchard management plan.
`;
}
// Strawberry
function positiveResultStrawberry(){
document.getElementById("resultstrawberry").style.display = "block";
document.getElementById("resultstrawberry").innerHTML = `
<strong>Strawberry - Alcaligenes:</strong> Prevent diseases<br>
<strong>Strawberry - Bacillus spp.:</strong> Phosphate-Solubilizing<br>
<strong>Strawberry - Pantoea:</strong> Nitrogen fixation<br>
`;
}

function negativeResultStrawberry() {
document.getElementById("resultstrawberry").style.display = "block";
document.getElementById("resultstrawberry").innerHTML = `
<strong>Gray Mold - Botrytis cinerea:</strong> 
Treatment: Neem oil is one of the best natural fungicides that can be used preemptively as well as after an infection. Dilute the neem solution per the bottle specifications and spray directly on plants to reduce the chances of a botrytis breakout. Neem is a safe compound from a tropical tree, however it can taste pretty gross, so don’t forget to thoroughly wash your berries.<br><br>

<strong>Powdery Mildew - Podosphaera aphanis:</strong> 
Treatment:
- Homemade Baking Soda Spray: This old-time granny remedy is highly effective as long as it includes a secret viscous ingredient (oil or soap) to hold the sodium bicarbonate on the leaf surface. Mix 1 tablespoon baking soda with 1 teaspoon horticultural oil or liquid soap (I like Dr. Bronners) and 1 gallon of water. Spray on the plants every 1-2 weeks.
- Vinegar Spray: Mix 2-3 tablespoons of apple cider vinegar (about 5% acetic acid) in a gallon of water and spray all over plant surfaces. The acidity kills powdery mildew spores.<br><br>

<strong>Leaf spot - Mycospharella fragariae:</strong> 
Treatment: Leaf spot is technically “incurable”. Once it’s on your plants, your only goal is to slow the spread. Because this is mostly an aesthetic issue, researchers say that fungicide use isn’t usually warranted. Leaf spot isn’t a huge issue unless you are noticing spots joining together and killing off significant numbers of leaves. At this point, you may want to remove plants and renovate the beds.<br><br>

<strong>Verticillium Wilt - Verticillium dahliae and V. albo-atrum:</strong> 
Treatment: Because verticillium wilt can lie dormant in the soil for many years, it isn’t really a treatable disease. There are no fungicides or fumigants that will eliminate the pathogens. Instead, try to optimize your soil health with plenty of microbially-rich compost, or establish new strawberry raised beds or containers.<br><br>

<strong>Alternaria Fruit Spot - Alternaria alternata:</strong> 
Treatment: Once alternaria starts attacking your strawberries, they won’t be edible anyways. Remove infected berries and throw them away. Organic copper fungicides are available as a last resort.<br><br>

<strong>Anthracnose - Colletotrichum sp.:</strong> 
Treatment: The main control options for anthracnose are copper-based fungicides, however copper can build up to toxic levels in the soil and harm earthworms or soil microbes. The best treatment for anthracnose is removing diseased plants and following the sanitation measures described above.<br>
`;
}

// Mango Ginger
function positiveResultMangoGinger(){
document.getElementById("resultmangoginger").style.display = "block";
document.getElementById("resultmangoginger").innerHTML = `
<strong>Mango Ginger - Bacillus spp.:</strong> Root development, Phosphate-Solubilizing and Prevent diseases<br>
<strong>Mango Ginger - Pseudomonas spp.:</strong> Induce plant growth<br>
<strong>Mango Ginger - Pseudomonas putida:</strong> Tolerated to maximum salt concentration<br>
<strong>Mango Ginger - Azotobacter chroococcum:</strong> Nitrogen fixation<br>
`;
}

function negativeResultMangoGinger() {
document.getElementById("resultmangoginger").style.display = "block";
document.getElementById("resultmangoginger").innerHTML = `
<strong>Soft rot or rhizome rot - Pythium aphanidermatum/ P. vexans / P. myriotylum:</strong> 
Treatment:
- Treatment of seed rhizomes with mancozeb 0.3% for 30 minutes before storage and once again before planting reduces the incidence of the disease.
- Cultural practices such as selection of well-drained soils for planting are important for managing the disease, since stagnation of water predisposes the plant to infection.
- Seed rhizomes are to be selected from disease-free gardens, since the disease is also seed-borne.
- Once the disease is located in the field, removal of affected clumps and drenching the affected and surrounding beds with mancozeb 0.3% checks the spread of the disease.<br><br>

<strong>Bacterial wilt - Ralstonia solanacearum:</strong> 
Treatment:
- The cultural practices adopted for managing soft rot are also to be adopted for bacterial wilt.
- The seed rhizomes may be treated with streptocycline 200ppm for 30 minutes and shade dried before planting.
- Once the disease is noticed in the field all beds should be drenched with Bordeaux mixture 1% or copper oxychloride 0.2%.<br><br>

<strong>Leaf spot - Phyllosticta zingiberi:</strong> 
Treatment: The disease can be controlled by spraying Copper oxychloride 0.25 % or Mancozeb 0.2%.<br>
`;
}

