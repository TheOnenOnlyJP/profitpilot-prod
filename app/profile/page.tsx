"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Mail, Calendar, Phone, MapPin, Edit, Shield, Bell } from 'lucide-react';
import Image from 'next/image';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  
  const userData = {
    name: "Josh Boyd",
    role: "CEO @ProfitPilot",
    email: "adminprofitpilot@proton.me",
    phone: "+1 (587) 989-7422",
    location: "Edmonton Alberta",
    birthday: "2001-10-30",
    joinDate: "2023-03-10",
    lastLogin: "2024-11-11 09:45 AM",
    twoFactorEnabled: true,
    notifications: {
      email: true,
      push: true,
      trading: true
    }
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="space-y-6">
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Profile Information</CardTitle>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border hover:bg-accent transition-colors duration-200"
              >
                <Edit className="h-4 w-4" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <div className="relative w-24 h-24">
                  <Image
                    src="/assets/josh.png"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                    priority
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 p-1 bg-background rounded-full border border-border hover:bg-accent transition-colors duration-200">
                      <Edit className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Full Name</label>
                    <input
                      type="text"
                      disabled={!isEditing}
                      value={userData.name}
                      className="w-full p-2 mt-1 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Role</label>
                    <input
                      type="text"
                      disabled={!isEditing}
                      value={userData.role}
                      className="w-full p-2 mt-1 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <div className="relative flex items-center mt-1">
                    <Mail className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      disabled={!isEditing}
                      value={userData.email}
                      className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Phone</label>
                  <div className="relative flex items-center mt-1">
                    <Phone className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      disabled={!isEditing}
                      value={userData.phone}
                      className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Location</label>
                  <div className="relative flex items-center mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      disabled={!isEditing}
                      value={userData.location}
                      className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Birthday</label>
                  <div className="relative flex items-center mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="date"
                      disabled={!isEditing}
                      value={userData.birthday}
                      className="w-full p-2 pl-10 rounded-lg bg-background border border-border disabled:bg-muted focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium text-foreground">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-emerald-500 dark:text-emerald-400 font-medium">Enabled</span>
                    <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors duration-200">
                      Configure
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium text-foreground">Change Password</h3>
                      <p className="text-sm text-muted-foreground">Update your password regularly to keep your account secure</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors duration-200">
                    Update
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive updates about your account via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={userData.notifications.email} className="sr-only peer" />
                    <div className="w-11 h-6 bg-muted rounded-full peer dark:bg-muted peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Trading Notifications</h3>
                    <p className="text-sm text-muted-foreground">Get alerts about important trading events</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={userData.notifications.trading} className="sr-only peer" />
                    <div className="w-11 h-6 bg-muted rounded-full peer dark:bg-muted peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Account Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium text-foreground">{new Date(userData.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Last Login</span>
                  <span className="font-medium text-foreground">{userData.lastLogin}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}