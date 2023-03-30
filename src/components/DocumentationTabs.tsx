"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import Code from "@/components/Code";
import { nodejs, python, Fetch, GoLang } from "@/helpers/documentation-code";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="fetch">Fetch</TabsTrigger>
        <TabsTrigger value="golang">GoLang</TabsTrigger>
      </TabsList>

      <TabsContent value="nodejs">
        <SimpleBar>
          <Code animated language="javascript" code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code animated language="python" code={python} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="fetch">
        <SimpleBar>
          <Code animated language="javascript" code={Fetch} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="golang">
        <SimpleBar>
          <Code animated language="go" code={GoLang} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
