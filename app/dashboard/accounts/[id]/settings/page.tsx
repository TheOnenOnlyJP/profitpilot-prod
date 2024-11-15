"use client";

import { useState } from "react";
import { Card, CardContent } from "@/helpers/components/ui/card";
import {
  Terminal,
  Link,
  AlertTriangle,
  Trash2,
  Save,
  X,
  RefreshCcw,
  Database,
  Lock,
} from "lucide-react";

export default function AccountSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState("mt5");
  const [provisioningProfile, setProvisioningProfile] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-3 gap-6">
          {/* MetaAPI Connection Settings */}
          <div className="col-span-2 space-y-6">
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
                        className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                      >
                        <option value="mt4">MetaTrader 4</option>
                        <option value="mt5">MetaTrader 5</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Account Type
                      </label>
                      <select className="w-full p-2 mt-1 rounded-lg bg-background border border-border">
                        <option value="live">Live</option>
                        <option value="demo">Demo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Broker Server
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ICMarkets-Demo"
                      className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Account ID
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Login/Account Number
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced MetaAPI Settings */}
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
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Provisioning Profile ID
                    </label>
                    <input
                      type="text"
                      value={provisioningProfile}
                      onChange={(e) => setProvisioningProfile(e.target.value)}
                      className="w-full p-2 mt-1 rounded-lg bg-background border border-border"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Region
                      </label>
                      <select className="w-full p-2 mt-1 rounded-lg bg-background border border-border">
                        <option value="new-york">New York</option>
                        <option value="london">London</option>
                        <option value="singapore">Singapore</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Connection Mode
                      </label>
                      <select className="w-full p-2 mt-1 rounded-lg bg-background border border-border">
                        <option value="cloud">Cloud</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-border"
                      />
                      <span className="text-sm text-foreground">
                        Enable CopyFactory integration
                      </span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-border"
                      />
                      <span className="text-sm text-foreground">
                        Enable risk management API
                      </span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-border"
                      />
                      <span className="text-sm text-foreground">
                        Allow manual trading
                      </span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            {/* API Status */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Connection Status
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      MetaAPI Connection
                    </span>
                    <span className="text-sm text-emerald-500">Connected</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Last Sync</span>
                    <span className="text-sm text-muted-foreground">
                      2 minutes ago
                    </span>
                  </div>

                  <button
                    className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                    onClick={() => setLoading(true)}
                  >
                    <RefreshCcw
                      className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                    />
                    Refresh Connection
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Security
                  </h3>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm text-foreground">
                      Require 2FA for trades
                    </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm text-foreground">
                      IP whitelisting
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Danger Zone
                  </h3>
                </div>

                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors">
                    <Trash2 className="h-4 w-4" />
                    Delete Account
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
            <X className="h-4 w-4" />
            Cancel
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
