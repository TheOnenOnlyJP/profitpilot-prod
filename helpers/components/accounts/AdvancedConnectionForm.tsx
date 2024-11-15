import { Card } from "@nextui-org/react";
import { CardContent } from "../ui/card";
import { Terminal } from "lucide-react";

export default function AdvancedConnectionForm({
  advancedForm,
  setAdvancedForm,
}: {
  advancedForm: {
    region: string;
    enableCopyFactory: boolean;
    copyFactoryRole: string;
    enableRiskManagement: boolean;
    enableMetaStats: boolean;
  };
  setAdvancedForm: (advancedForm: {
    region: string;
    enableCopyFactory: boolean;
    copyFactoryRole: string;
    enableRiskManagement: boolean;
    enableMetaStats: boolean;
  }) => void;
}) {
  const handleChange = (field: string, value: any) => {
    setAdvancedForm({
      ...advancedForm,
      [field]: value,
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2 rounded-lg bg-primary/10">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Advanced Settings
            </h3>
            <p className="text-sm text-muted-foreground">
              Additional MetaAPI configuration
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* <div>
            <label className="text-sm font-medium text-foreground">
              Provisioning Profile ID
            </label>
            <input
              type="text"
              value={advancedForm.provisioningProfile}
              onChange={(e) =>
                handleChange("provisioningProfile", e.target.value)
              }
              className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
            />
          </div> */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">
                Region
              </label>
              <select
                className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                value={advancedForm.region}
                onChange={(e) => handleChange("region", e.target.value)}
              >
                <option value="new-york">New York</option>
                <option value="london">London</option>
              </select>
            </div>
            {/* 
            <div>
              <label className="text-sm font-medium text-foreground">
                Connection Mode
              </label>
              <select
                className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                value={advancedForm.connectionMode}
                onChange={(e) => handleChange("connectionMode", e.target.value)}
              >
                <option value="cloud">Cloud</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div> */}

            {advancedForm.enableCopyFactory && (
              <div>
                <label className="text-sm font-medium text-foreground">
                  CopyFactory Role
                </label>
                <select
                  className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                  value={advancedForm.copyFactoryRole}
                  onChange={(e) =>
                    handleChange("copyFactoryRole", e.target.value)
                  }
                >
                  <option value="provider">Provider</option>
                  <option value="subscriber">Subscriber</option>
                </select>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-border"
                checked={advancedForm.enableCopyFactory}
                onChange={(e) =>
                  handleChange("enableCopyFactory", e.target.checked)
                }
              />
              <span className="text-sm text-foreground">
                Enable CopyFactory Integration
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-border"
                checked={advancedForm.enableRiskManagement}
                onChange={(e) =>
                  handleChange("enableRiskManagement", e.target.checked)
                }
              />
              <span className="text-sm text-foreground">
                Enable Risk Management API
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-border"
                checked={advancedForm.enableMetaStats}
                onChange={(e) =>
                  handleChange("enableMetaStats", e.target.checked)
                }
              />
              <span className="text-sm text-foreground">
                Enable MetaStats API
              </span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
