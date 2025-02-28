/* eslint import/order:0 */
/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as AddEmission from "../../screens/AddEmission/translations";
import * as EmissionItem from "../../screens/EmissionItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as SupportUs from "../../screens/SupportUs/translations";
import * as MyLocation from "../../screens/MyLocation/translations";
import * as ActDetail from "../../screens/ActDetail/translations";
import * as Notifications from "../../screens/Notifications/translations";
import * as InfoModal from "../../screens/InfoModal/translations";
import * as MyData from "../../screens/MyData/translations";
import * as CategorySelection from "../../screens/CategorySelection/translations";
import * as SubCategorySelection from "../../screens/SubCategorySelection/translations";
import * as MonthlyEmissions from "../../screens/MonthlyEmissions/translations";
import * as Languages from "../../screens/Languages/translations";

/* COMPONENTS */
import * as NoEmission from "components/NoEmission/translations";

/* UTILS */
import * as UI from "utils/ui/translations";

const en = {
  ...Act.en,
  ...Budget.en,
  ...Emissions.en,
  ...Settings.en,
  ...MonthlyBudget.en,
  ...ComingSoon.en,
  ...AddEmission.en,
  ...EmissionItem.en,
  ...Intro.en,
  ...About.en,
  ...SupportUs.en,
  ...MyLocation.en,
  ...ActDetail.en,
  ...Notifications.en,
  ...InfoModal.en,
  ...MyData.en,
  ...CategorySelection.en,
  ...SubCategorySelection.en,
  ...MonthlyEmissions.en,
  ...NoEmission.en,
  ...UI.en,
  ...Languages.en,
};

const de = {
  ...UI.de,
  ...About.de,
  ...MonthlyBudget.de,
  ...NoEmission.de,
  ...Act.de,
  ...Budget.de,
  ...Emissions.de,
  ...Settings.de,
  ...ComingSoon.de,
  ...InfoModal.de,
  ...AddEmission.de,
  ...EmissionItem.de,
  ...Intro.de,
  ...SupportUs.de,
  ...MyLocation.de,
  ...CategorySelection.de,
  ...SubCategorySelection.de,
  ...ActDetail.de,
  ...MyData.de,
  ...MonthlyEmissions.de,
  ...Languages.de,
};

const fr = {
  ...UI.fr,
  ...About.fr,
  ...Notifications.fr,
  ...MonthlyBudget.fr,
  ...NoEmission.fr,
  ...Act.fr,
  ...Budget.fr,
  ...Emissions.fr,
  ...Settings.fr,
  ...ComingSoon.fr,
  ...InfoModal.fr,
  ...AddEmission.fr,
  ...EmissionItem.fr,
  ...Intro.fr,
  ...SupportUs.fr,
  ...MyLocation.fr,
  ...ActDetail.fr,
  ...MyData.fr,
  ...CategorySelection.fr,
  ...SubCategorySelection.fr,
  ...MonthlyEmissions.fr,
  ...Languages.fr,
};

const sv = {
  ...UI.sv,
  ...About.sv,
  ...Notifications.sv,
  ...MonthlyBudget.sv,
  ...NoEmission.sv,
  ...Act.sv,
  ...Budget.sv,
  ...Emissions.sv,
  ...Settings.sv,
  ...ComingSoon.sv,
  ...InfoModal.sv,
  ...AddEmission.sv,
  ...EmissionItem.sv,
  ...Intro.sv,
  ...SupportUs.sv,
  ...MyLocation.sv,
  ...ActDetail.sv,
  ...MyData.sv,
  ...CategorySelection.sv,
  ...SubCategorySelection.sv,
  ...MonthlyEmissions.sv,
  ...Languages.sv,
};

const pt = {
  ...UI.pt,
  ...About.pt,
  ...Notifications.pt,
  ...MonthlyBudget.pt,
  ...NoEmission.pt,
  ...Act.pt,
  ...Budget.pt,
  ...Emissions.pt,
  ...Settings.pt,
  ...InfoModal.pt,
  ...AddEmission.pt,
  ...EmissionItem.pt,
  ...Intro.pt,
  ...SupportUs.pt,
  ...MyLocation.pt,
  ...ActDetail.pt,
  ...MyData.pt,
  ...CategorySelection.pt,
  ...SubCategorySelection.pt,
  ...MonthlyEmissions.pt,
  ...Languages.pt,
};

const es = {
  ...UI.es,
  ...About.es,
  ...Notifications.es,
  ...MonthlyBudget.es,
  ...NoEmission.es,
  ...Act.es,
  ...Budget.es,
  ...Emissions.es,
  ...Settings.es,
  ...InfoModal.es,
  ...AddEmission.es,
  ...EmissionItem.es,
  ...Intro.es,
  ...SupportUs.es,
  ...MyLocation.es,
  ...ActDetail.es,
  ...MyData.es,
  ...CategorySelection.es,
  ...SubCategorySelection.es,
  ...MonthlyEmissions.es,
  ...Languages.es,
};

const ru = {
  ...UI.ru,
  ...About.ru,
  ...Notifications.ru,
  ...MonthlyBudget.ru,
  ...NoEmission.ru,
  ...Act.ru,
  ...Budget.ru,
  ...Emissions.ru,
  ...Settings.ru,
  ...InfoModal.ru,
  ...AddEmission.ru,
  ...EmissionItem.ru,
  ...Intro.ru,
  ...SupportUs.ru,
  ...MyLocation.ru,
  ...ActDetail.ru,
  ...MyData.ru,
  ...CategorySelection.ru,
  ...SubCategorySelection.ru,
  ...MonthlyEmissions.ru,
  ...Languages.ru,
};

const pl = {
  ...UI.pl,
  ...About.pl,
  ...Notifications.pl,
  ...MonthlyBudget.pl,
  ...NoEmission.pl,
  ...Act.pl,
  ...Budget.pl,
  ...Emissions.pl,
  ...Settings.pl,
  ...InfoModal.pl,
  ...AddEmission.pl,
  ...EmissionItem.pl,
  ...Intro.pl,
  ...SupportUs.pl,
  ...MyLocation.pl,
  ...ActDetail.pl,
  ...MyData.pl,
  ...CategorySelection.pl,
  ...SubCategorySelection.pl,
  ...MonthlyEmissions.pl,
  ...Languages.pl,
};

const da = {
  ...UI.da,
  ...About.da,
  ...Notifications.da,
  ...MonthlyBudget.da,
  ...NoEmission.da,
  ...Act.da,
  ...Budget.da,
  ...Emissions.da,
  ...Settings.da,
  ...InfoModal.da,
  ...AddEmission.da,
  ...EmissionItem.da,
  ...Intro.da,
  ...SupportUs.da,
  ...MyLocation.da,
  ...ActDetail.da,
  ...MyData.da,
  ...CategorySelection.da,
  ...SubCategorySelection.da,
  ...MonthlyEmissions.da,
  ...Languages.da,
};

const zh = {
  ...UI.zh,
  ...About.zh,
  ...Notifications.zh,
  ...MonthlyBudget.zh,
  ...NoEmission.zh,
  ...Act.zh,
  ...Budget.zh,
  ...Emissions.zh,
  ...Settings.zh,
  ...InfoModal.zh,
  ...AddEmission.zh,
  ...EmissionItem.zh,
  ...Intro.zh,
  ...SupportUs.zh,
  ...MyLocation.zh,
  ...ActDetail.zh,
  ...MyData.zh,
  ...CategorySelection.zh,
  ...SubCategorySelection.zh,
  ...MonthlyEmissions.zh,
};

const ms = {
  ...UI.ms,
  ...About.ms,
  ...Notifications.ms,
  ...MonthlyBudget.ms,
  ...NoEmission.ms,
  ...Act.ms,
  ...Budget.ms,
  ...Emissions.ms,
  ...Settings.ms,
  ...InfoModal.ms,
  ...AddEmission.ms,
  ...EmissionItem.ms,
  ...Intro.ms,
  ...SupportUs.ms,
  ...MyLocation.ms,
  ...ActDetail.ms,
  ...MyData.ms,
  ...CategorySelection.ms,
  ...SubCategorySelection.ms,
  ...MonthlyEmissions.ms,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    MonthlyBudget.TranslationKeys,
    NoEmission.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    ComingSoon.TranslationKeys,
    InfoModal.TranslationKeys,
    AddEmission.TranslationKeys,
    EmissionItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    Notifications.TranslationKeys,
    MyLocation.TranslationKeys,
    SupportUs.TranslationKeys,
    MyData.TranslationKeys,
    CategorySelection.TranslationKeys,
    SubCategorySelection.TranslationKeys,
    MonthlyEmissions.TranslationKeys,
    ActDetail.TranslationKeys,
    Languages.TranslationKeys {}

export { en, de, fr, sv, pt, es, pl, ru, da, zh, ms };
