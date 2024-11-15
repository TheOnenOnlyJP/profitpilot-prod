import { Card } from "@nextui-org/react";
import { CardContent } from "../ui/card";
import { Link } from "lucide-react";

export default function MetaAPIConnectionForm({
  mainForm,
  setMainForm,
}: {
  mainForm: {
    platform: string;
    // accountType: string;
    metaTraderServer: string;
    accountName: string;
    metaTraderLogin: string;
    password: string;
  };
  setMainForm: (mainForm: {
    platform: string;
    // accountType: string;
    metaTraderServer: string;
    accountName: string;
    metaTraderLogin: string;
    password: string;
  }) => void;
}) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMainForm({ ...mainForm, [name]: value });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2 rounded-lg bg-primary/10">
            <Link className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              MetaAPI Connection
            </h3>
            <p className="text-sm text-muted-foreground">
              Core trading account configuration
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">
                Platform
              </label>
              <select
                name="platform"
                className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                value={mainForm.platform}
                onChange={handleChange}
              >
                <option value="mt4">MetaTrader 4</option>
                <option value="mt5">MetaTrader 5</option>
              </select>
            </div>

            {/* <div>
              <label className="text-sm font-medium text-foreground">
                Account Type
              </label>
              <select
                name="accountType"
                className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                value={mainForm.accountType}
                onChange={handleChange}
              >
                <option value="live">Live</option>
                <option value="demo">Demo</option>
              </select>
            </div> */}
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">
              MetaTrader Server Name
            </label>
            <input
              type="text"
              name="metaTraderServer"
              placeholder="e.g. ICMarkets-Demo"
              className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
              value={mainForm.metaTraderServer}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">
              Account Name
            </label>
            <input
              type="text"
              name="accountName"
              className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
              value={mainForm.accountName}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">
                MetaTrader Login
              </label>
              <input
                type="text"
                name="metaTraderLogin"
                className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                value={mainForm.metaTraderLogin}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                value={mainForm.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
