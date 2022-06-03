import { ActionPage } from './ActionPage';
import { ActionTotalPoints } from './ActionTotalPoints';
import { ActionStepper } from './ActionStepper';
import { ActionHeader } from './ActionHeader';
import { ActionButtons } from './ActionButtons';
import { ActionBodyContainer } from './ActionBodyContainer';

ActionPage.Buttons = ActionButtons;
ActionPage.Body = ActionBodyContainer;
ActionPage.Header = ActionHeader;
ActionPage.Stepper = ActionStepper;
ActionPage.TotalPoints = ActionTotalPoints;

export { ActionPage };
