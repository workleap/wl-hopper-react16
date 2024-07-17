# @hopper-ui/icons-react16

## 2.2.0

### Minor Changes

- 31dd1b5: Added Pingboard new icons

  ### Minor Changes

  # Added Icons

  BirthdayIcon
  BuildIcon

  # Added RichIcons

  ApplauseRichIcon
  ProfileRichIcon

## 2.1.0

### Minor Changes

- # 89b517e: Added Icons

  ConnectionsIcon
  GraduationHatIcon
  ImageIcon
  ScreenShareIcon

  # Added RichIcons

  AnniversaryRichIcon
  BirthdayRichIcon
  BrokenImageRichIcon
  DeletedUserRichIcon
  DepartmentRichIcon
  DirectoryRichIcon
  DiscountRichIcon
  GroupRichIcon
  LocationRichIcon
  OpenRoleRichIcon
  StatusRichIcon
  WhosWhoRichIcon

## 2.0.1

### Patch Changes

- 68e75f3: fix inversion between background and shadow values

## 2.0.0

### Major Changes

- 6eb9486: **Breaking Change**: Updated the icons variables to be more consistent with the other components.

  Will need to update the style sheets to use the new CSS variables.

  For example, they will need to replace:

  | Old variable                                   | New variable                            |
  | ---------------------------------------------- | --------------------------------------- |
  | `--hop-richicon-placeholder-surface-color`     | `--hop-Richicon-placeholder-shadow`     |
  | `--hop-richicon-placeholder-icon-color`        | `--hop-Richicon-placeholder-background` |
  | `--hop-richicon-placeholder-icon-strong-color` | `--hop-Richicon-placeholder-fill`       |

  Add color variables for custom rich-icons styling

  to change the background color, use the variable `--hop-Richicon-placeholder-background`
  to change the shadow color, use the variable `--hop-Richicon-placeholder-shadow`

## 1.9.0

### Minor Changes

- 028a20b: Changes to Icons:

  **Added**

  | Icon Name  |
  | ---------- |
  | MobileIcon |

## 1.8.0

### Minor Changes

- 1b14b74: Added Pingboard icons

  **Added**

  | Icon Name            |
  | -------------------- |
  | EverythingReportIcon |
  | OpenRoleIcon         |
  | PhoneIcon            |
  | PrintIcon            |
  | UploadIcon           |

## 1.7.0

### Minor Changes

- 1f2d05d: Modified the following icons:

  **Added**

  | Icon Name               |
  | ----------------------- |
  | ActionListRichIcon      |
  | AnonymousRichIcon       |
  | CautionRichIcon         |
  | ConversationRichIcon    |
  | CustomRichIcon          |
  | DecreasingScoreRichIcon |
  | EmailRichIcon           |
  | FeedbackRichIcon        |
  | GoalIndividualRichIcon  |
  | GoalTeamRichIcon        |
  | GrowthRichIcon          |
  | IdeaRichIcon            |
  | InfoRichIcon            |
  | LikertScaleRichIcon     |
  | MultipleChoiceRichIcon  |
  | OneOnOneRichIcon        |
  | OpinionScaleRichIcon    |
  | OrganizationRichIcon    |
  | PeopleRichIcon          |
  | QuestionRichIcon        |
  | ReminderRichIcon        |
  | ReviewRichIcon          |
  | RisingScoreRichIcon     |
  | RocketRichIcon          |
  | ScriptRichIcon          |
  | SettingsRichIcon        |
  | SparklesRichIcon        |
  | StarRichIcon            |
  | SuccessRichIcon         |
  | SupportRichIcon         |
  | TemplateRichIcon        |
  | TextAnswerRichIcon      |
  | UpsellRichIcon          |

## 1.6.0

### Minor Changes

- 729d3bc: Modified the following icons:

  **Added**

  | Icon Name                 | Product    |
  | ------------------------- | ---------- |
  | AlignmentIcon             | Officevibe |
  | AmbassadorshipIcon        | Officevibe |
  | EventIcon                 | Officevibe |
  | FeedbackIcon              | Officevibe |
  | FocusIcon                 | Officevibe |
  | GrowthIcon                | Officevibe |
  | HappinessIcon             | Officevibe |
  | HierarchyIcon             | Officevibe |
  | KeyResultIcon             | Officevibe |
  | OneOnOneIcon              | Officevibe |
  | RelationWithManagerIcon   | Officevibe |
  | RelationshipWithPeersIcon | Officevibe |
  | ReviewIcon                | Officevibe |
  | SatisfactionIcon          | Officevibe |
  | SegmentIcon               | Officevibe |
  | SliderIcon                | Officevibe |
  | WellnessIcon              | Officevibe |
  | BriefcaseIcon             | LMS        |
  | DuplicateIcon             | LMS        |
  | HourglassIcon             | LMS        |
  | InvoiceIcon               | LMS        |
  | KeyIcon                   | LMS        |
  | LearningPathIcon          | LMS        |
  | LearningPathStepIcon      | LMS        |
  | QuizLessonIcon            | LMS        |
  | RequalificationIcon       | LMS        |
  | TextLessonIcon            | LMS        |
  | WebinarLessonIcon         | LMS        |
  | ApplauseIcon              | Pingboard  |
  | AssistantIcon             | Pingboard  |
  | AssistantToIcon           | Pingboard  |
  | BranchesIcon              | Pingboard  |
  | DepartmentIcon            | Pingboard  |
  | DirectReportsIcon         | Pingboard  |
  | DottedLinesIcon           | Pingboard  |
  | GroupsIcon                | Pingboard  |
  | OrgChartIcon              | Pingboard  |
  | PronunciationIcon         | Pingboard  |
  | ReportsToIcon             | Pingboard  |
  | WhosWhoFaceIcon           | Pingboard  |
  | WhosWhoGameIcon           | Pingboard  |

## 1.5.0

### Minor Changes

- 4be30bb: Added NextCalendarIcon

## 1.4.0

### Minor Changes

- 448669d: **Added**

  | Icon Name  |
  | ---------- |
  | FolderIcon |

## 1.3.0

### Minor Changes

- 75696bd: Updated icon to hopper icons version

## 1.2.0

### Minor Changes

- dd93236: **Added**

  | SVG Name                 |
  | ------------------------ |
  | BoltIcon                 |
  | SettingsNotificationIcon |
  | SettingsWarningIcon      |

## 1.1.1

### Patch Changes

- 63691bd: fix: fill is not set to currentColor by default

## 1.1.0

### Minor Changes

- 2e4a5ad: - Renamed ArrowsUpdownIcon to MaximizeIcon.
  - Added ArrowsOutVerticalIcon.

## 1.0.3

### Patch Changes

- f5729c5: remove fill currentColor values on every path. The value of fill is now driven by the svg, instead of by paths
